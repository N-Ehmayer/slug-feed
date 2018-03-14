"use strict";
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const sentiment = require('sentiment');
const sanitize = require('sanitizer').sanitize;

function initialScore(comment, user) {
  /**
   * Provide an initial score to the comment based on sentiment analysis.
   * This is to encourage civility between commentors.
   *
   * The user is included in the function signature in case we want to
   * make changes for habitually good/bad commenters.
   */
  let score = Math.ceil(sentiment(comment).comparative * 3 / 5);
  return score;
}

function appendRoutes(router, knex) {

  router.get(`/api/comments`, (request, response) => {
    const dbQuery = knex
      .select(knex.raw('comments.*, SUM(CASE is_upvote WHEN true THEN 1 WHEN false THEN -1 ELSE 0 END) AS votes_score'))
      .from('comments')
      .leftJoin('comment_votes', 'comments.id', '=', 'comment_votes.comment_id')
      .groupBy('comments.id')
      .orderBy('comments.id');
    for (const field of Object.keys(request.query)) {
      dbQuery.where(field, request.query[field]);
    }
    dbQuery
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });

  router.get(`/api/comments/:id`, (request, response) => {
    knex
      .select('comments.*', knex.raw('SUM(CASE is_upvote WHEN true THEN 1 WHEN false THEN -1 ELSE 0 END) AS votes_score'))
      .from('comments')
      .leftJoin('comment_votes', 'comment.id', '=', 'comment_votes.comment_id')
      .where('id', request.params.id)
      .groupBy('comments.id')
      .orderBy('comments.id')
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });

  router.post('/api/comments', (request, response) => {
    // router.post('/api/comments', ensureLoggedIn, (request, response) => {
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
