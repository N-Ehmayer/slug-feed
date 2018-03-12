"use strict";

function appendRoutes(router) {

  router.get('/article/:id', (request, response) => {
    response.render('view_article', {
      article: request.params.id
    });
  })

};

module.exports = appendRoutes;
