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

function baseQuery(knex, id) {
  let query = knex
    .select(knex.raw('comments.*, users.profile, SUM(CASE comment_votes.is_upvote WHEN true THEN 1 WHEN false THEN -1 ELSE 0 END) AS votes_score'))
    .from('comments')
    .leftJoin('comment_votes', 'comments.id', '=', 'comment_votes.comment_id')
    .leftJoin('users', 'comments.user_id', '=', 'users.id');

  if (id) {
    query.where('comments.id', id);
  }
  query
    .groupBy('comments.id')
    .groupBy('users.id')
    .orderBy('comments.id');

  return query;
}

function appendRoutes(router, knex) {

  router.get(`/api/comments`, (request, response) => {
    const dbQuery = baseQuery(knex);
    for (const field of Object.keys(request.query)) {
      dbQuery.where(field, request.query[field]);
    }
    dbQuery
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });

  router.get(`/api/comments/:id`, (request, response) => {
    baseQuery(knex, request.params.id)
      .then(results => response.json(results))
      .catch(error => response.status(422).send(error.detail));
  });

  router.post('/api/comments', (request, response) => {
    console.log("HIT THE ROUTE");
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
