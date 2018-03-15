"use strict";

function appendRoutes(router) {

  router.get('/api/session', (request, response) => {
    response.json(request.user);
  });

};

module.exports = appendRoutes;
