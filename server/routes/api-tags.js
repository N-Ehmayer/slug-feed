"use strict";
//
function getArticlesByTag(router, knex) {

  router.get('/api/tag/:id', (request, response) => {
    console.log(request.params.id)
    knex
      .select('articles.*')
      .from('articles').join('article_tags', 'articles.id', 'article_tags.article_id')
      .where('article_tags.tag_id', request.params.id)
      .orderBy('created_at')
      .then(articles => response.json(articles))
      .catch(error => response.send(error));
  })

};

module.exports = getArticlesByTag;
