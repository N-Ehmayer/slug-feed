"use strict";

function appendRoutes(router) {

  router.get('/', (request, response) => {
    response.render('index');
  })

};

module.exports = appendRoutes;
