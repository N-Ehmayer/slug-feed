"use strict";
const getArticle = require('./helpers/article');

function appendRoutes(router, knex) {

  router.get('/api/articles/:id', (request, response) => {
    getArticle(knex, request.params.id, article => {
      response.json(article)
    }, error => {
      response.status(500).send(error);
    });
  });
};

module.exports = appendRoutes;
