/**
 * Template for custom api routes
 * Relies on dependency injection to get the router and knex database connection.
 */
"use strict";

function appendRoutes(router, knex) {

  router.get('/api/templates', (request, response) => {
    knex
      .select('*')
      .from('templates')
      .orderBy('created_at');
      .then(templates => response.json(templates))
      .catch(error => response.send(error));
  })

};

module.exports = appendRoutes;
