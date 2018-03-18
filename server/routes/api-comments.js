/** Custom routes for /api/comments */
"use strict";
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const sentiment = require('sentiment');
const sanitize = require('sanitizer').sanitize;

/**
 * Provide an initial score to the comment based on sentiment analysis.
 * This is to encourage civility between commentors.
 *
 * The user is included in the function signature in case we want to
 * make changes for habitually good/bad commenters.
 */
function initialScore(comment, user) {
  let score = Math.ceil(sentiment(comment).comparative * 3 / 5);
  return score;
}

/** Utility Query Def for getting the total of the votes on a given comment(s) */
function baseQuery(knex, id, currentUserId) {
  let query = knex
    .select(knex.raw(`
      comments.*,
      posters.profile as poster,
      user_votes.is_upvote AS currentUserVoteType,
      SUM(CASE comment_votes.is_upvote WHEN true THEN 1 WHEN false THEN -1 ELSE 0 END) AS votes_score`
    ))
    .from('comments')
    .leftJoin('comment_votes', 'comments.id', '=', 'comment_votes.comment_id')
    .leftJoin('users AS posters', 'comments.user_id', '=', 'posters.id')
    .joinRaw(`
      LEFT OUTER JOIN comment_votes AS user_votes
      ON user_votes.comment_id = comments.id
      AND user_votes.user_id = '${currentUserId}'`
    )

  if (id) { query.where('comments.id', id); }
  query
    .groupBy('user_votes.id')
    .groupBy('comments.id')
    .groupBy('posters.id')
    .orderBy('comments.id');

  return query;
}

/** The actual routing changes */
function appendRoutes(router, knex) {

  /** Custom GET table route incorporating the comment score */
  router.get(`/api/comments`, (request, response) => {
    const dbQuery = baseQuery(knex, null, (request.user || {}).id);
    for (const field of Object.keys(request.query)) {
      if (field.toLowerCase() === 'limit') {
        dbQuery.limit(parseInt(request.query[field]))
      } else {
        dbQuery.where(field, request.query[field]);
      }
    }
    dbQuery
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });

  /** Custom GET record route incorporating the comment score */
  router.get(`/api/comments/:id`, (request, response) => {
    baseQuery(knex, request.params.id, (request.user || {}).id)
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });

  /** Custom POST record route calculating the initial score based on sentiment */
  router.post('/api/comments', ensureLoggedIn, (request, response) => {
    const score = initialScore(request.body.content, request.user)

    return knex('comments')
      .insert({
        user_id: request.user.id,
        section_id: request.body.section_id,
        content: sanitize(request.body.content),
        agree: request.body.agree,
        'initial_score': score
      })
      .returning('id')
      .then(results => response.json(results))
      .catch(error => response.send(error.detail));
  })
};


module.exports = appendRoutes;
