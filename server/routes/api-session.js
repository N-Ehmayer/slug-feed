"use strict";

function appendRoutes(router) {

  router.get('/api/session', (request, response) => {
    console.log('user: ', request.user);
    response.json(request.user);
  });

};

module.exports = appendRoutes;
