"use strict";

function appendRoutes(router, knex) {

  router.get('/template', (request, response) => {
    response.render('template');
  })

};

module.exports = appendRoutes;
