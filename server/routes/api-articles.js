/** Custom routes for /api/articles */
"use strict";

function appendRoutes(router, knex) {

  /** Custom GET for a single article that provides related information */
  router.get('/api/articles/:id', (request, response) => {

    // Variables
    const errHandler = error => response.status(500).send(error);
    const id = request.params.id;
    let articleObject = {};

    // Query Definitions
    const articleQuery = knex
      .select('*')
      .from('articles')
      .where('id', id)
      .orderBy('created_at');

    const sectionsQuery = knex
      .select('*')
      .from('sections')
      .where('article_id', id)
      .orderBy('id');

    const tagsQuery = knex
      .select('tags.*')
      .from('article_tags')
      .join('tags', 'tags.id', 'article_tags.tag_id')
      .where('article_tags.article_id', id)
      .orderBy('tags.id');

    const sectionCommentsQuery = function(sectionId) {
      return knex
        .select('comments.*', 'users.profile')
        .from('comments')
        .join('users', 'users.id', '=', 'comments.user_id')
        .where('comments.section_id', sectionId)
        .orderBy('comments.created_at');
    };

    const authorQuery = knex
      .select('users.*')
      .from('users').join('articles', 'users.id', 'articles.user_id')
      .where('articles.id', id);

    // Run the queries, bailing out on any errors
    articleQuery
      .then(articles => articleObject = articles[0])
      .catch(error => errHandler(error))
      .then(() => tagsQuery.then(tags =>  articleObject.tags = tags ))
      .catch(error => errHandler(error))
      .then(() =>
        sectionsQuery.then(sections => {
          articleObject.sections = sections;
          return Promise.all(sections.map(section => {
            return sectionCommentsQuery(section.id)
              .then(comments => section.comments = comments);
          }));
        }))
      .catch(error => errHandler(error))
      .then(() => response.json(articleObject))
      .catch(error => errHandler(error));
  });
};

module.exports = appendRoutes;
