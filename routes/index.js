"use strict";

function getArticles(knex, success, errHandler) {
  const articles = [];

  const articlesQuery = knex
    .select()
    .from('articles')
    .orderBy('created_at')
    .limit(6);

  return articlesQuery
    .then(articles => success(articles))
    .catch(error => errHandler(error));

}

function appendRoutes(router, knex) {

  router.get('/', (request, response) => {
    getArticles(knex, (articles) => {
      const templateVars = { articles };
      response.render('index', templateVars);
    })
  })

};

module.exports = appendRoutes;
