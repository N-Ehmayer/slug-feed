"use strict";

function appendRoutes(router) {

  router.get('/api/articles/:id', (req, res) => {
    let articleObject = {};

    const articleQuery = knex
      .select('*')
      .from('articles')
      .where('id', req.params.id)
      .orderBy('created_at');

    const sectionsQuery = knex
      .select('*')
      .from('sections')
      .where('article_id', req.params.id)
      .orderBy('id');

    const tagsQuery = knex
      .select('tags.*')
      .from('article_tags')
      .join('tags', 'tags.id', 'article_tags.tag_id')
      .where('article_tags.article_id', req.params.id)
      .orderBy('tags.id');

    const sectionCommentsQuery = function(sectionId) {
      return knex
        .select('comments.*')
        .from('comments')
        .where('section_id', sectionId)
        .orderBy('created_at');
    };

    const authorQuery = knex
      .select('users.*')
      .from('users').join('articles', 'users.id', 'articles.user_id')
      .where('articles.id', req.params.id);

    articleQuery
      .then(articles => articleObject = articles[0])
      .catch(error => {
        res.status(500).send('Error 500: We messed up getting your article');
        console.error(error);
      }).then(() =>
        sectionsQuery.then(sections => {
          articleObject.sections = sections;
          return Promise.all(sections.map(section => {
            return sectionCommentsQuery(section.id)
              .then(comments => section.comments = comments);
          }));
        })
      ).catch(error => {
        res.status(500).send('Error 500: We messed up getting your article sections');
        console.error(error);
      }).then(() => {
        return tagsQuery.then(tags => { articleObject.tags = tags; });
      }).catch(error => {
        res.status(500).send('Error 500: We messed up getting your article tags');
        console.error(error);
      }).then(() => res.json(articleObject))
      .catch(error => {
        res.status(500).send('Error 500: We messed up sending your article info');
        console.error(error);
      });
  });


};

module.exports = appendRoutes;
