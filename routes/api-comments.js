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

  router.post('/api/comments', (request, response) => {
    console.log("HIT THE ROUTE");
    // router.post('/api/comments', ensureLoggedIn, (request, response) => {
    const score = initialScore(request.body.content, request.user)

    return knex('comments')
      .insert({
        user_id: "google-oauth2|103031492696030474631",
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
