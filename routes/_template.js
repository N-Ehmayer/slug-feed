"use strict";

function appendRoutes(router) {

  router.get('/template', (request, response) => {
    response.render('template');
  })

};

module.exports = appendRoutes;
