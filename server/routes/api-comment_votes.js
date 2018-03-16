/** Custom routes for /api/comment_votes */

"use strict";
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

function appendRoutes(router, knex) {

  /** Modify the POST route to upsert (update or insert) to prevent multiple votes */
  router.post('/api/comment_votes', ensureLoggedIn, (request, response) => {
    knex
      .select()
      .from('comment_votes')
      .where({
        comment_id: request.body.comment_id,
        user_id: request.user.id
      })
      .then(results => {
        if (results.length === 0) {
          // INSERT
          return knex('comment_votes')
            .insert({
              user_id: request.user.id,
              comment_id: request.body.comment_id,
              is_upvote: request.body.is_upvote
            })
            .returning(['id', 'is_upvote'])
            .then(results => response.json(results));
        } else {
          // UPDATE
          return knex('comment_votes')
            .where('id', results[0].id)
            .update({
              'is_upvote': request.body.is_upvote,
              'updated_at': knex.fn.now()
            })
            .returning(['id', 'is_upvote'])
            .then(results => response.json(results));
        }
      })
      .catch(error => response.send(error.detail));
  })
};


module.exports = appendRoutes;
