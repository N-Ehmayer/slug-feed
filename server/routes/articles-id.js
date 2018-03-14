"use strict";
const getArticle = require('./helpers/article');

function appendRoutes(router, knex) {

  router.get('/articles/:id', (request, response) => {
    getArticle(knex, request.params.id, article => {
      response.render('view_article', { article });
    }, error => response.status(500).send(error) );
  });
};

module.exports = appendRoutes;
