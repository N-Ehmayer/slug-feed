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
        .select(knex.raw(`
          comments.*,
          posters.profile as poster,
          user_votes.is_upvote AS currentUserVoteType,
          SUM(CASE comment_votes.is_upvote WHEN true THEN 1 WHEN false THEN -1 ELSE 0 END) AS votes_score`
        ))
        .from('comments')
        .leftOuterJoin('users AS posters', 'comments.user_id', '=', 'posters.id')
        .leftOuterJoin('comment_votes', 'comments.id', '=', 'comment_votes.comment_id')
        .joinRaw(`
          LEFT OUTER JOIN comment_votes AS user_votes
          ON user_votes.comment_id = comments.id
          AND user_votes.user_id = '${(request.user || {}).id}'`
        )
        .where('comments.section_id', sectionId)
        .groupBy('user_votes.id')
        .groupBy('comments.id')
        .groupBy('posters.id')
        .orderBy('comments.id');
    };

    const authorQuery = knex
      .select('users.*')
      .from('users').join('articles', 'users.id', 'articles.user_id')
      .where('articles.id', id);

    const agreementQuery = knex
      .select(knex.raw(`
      AVG(CASE comment_votes.is_upvote WHEN comments.agree THEN 1 ELSE 0 END) AS agreement
      `))
      .from('comment_votes')
      .join('comments', 'comment_votes.comment_id', '=', 'comments.id')
      .join('sections', 'comments.section_id', '=', 'sections.id')
      .where('sections.article_id', id)
      .whereNot('comment_votes.is_upvote', null);

    // Run the queries, bailing out on any errors
    articleQuery
      .then(articles => articleObject = articles[0])
      .catch(error => errHandler(error))
      .then(() => tagsQuery.then(tags =>  articleObject.tags = tags ))
      .catch(error => errHandler(error))
      .then(() => authorQuery.then(authors =>  articleObject.author = authors[0].profile ))
      .catch(error => errHandler(error))
      .then(() => agreementQuery.then(agreements =>  {
        articleObject.agreement = parseFloat(agreements[0].agreement);
      }))
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
