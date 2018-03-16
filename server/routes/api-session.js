"use strict";

function appendRoutes(router, knex) {

  router.get('/api/session', (request, response) => {
    response.json(request.user);
  });

};

module.exports = appendRoutes;
