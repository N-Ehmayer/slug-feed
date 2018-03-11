"use strict";

require('dotenv').config();

const express = require("express");
const knexConfig = require("./knexfile");
const knexLogger = require('knex-logger');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;
const ENV = process.env.ENV || "development";
const app = express();

const knex = require("knex")(knexConfig[ENV]);
const apiRouteFactory = require("./api-route-factory.js");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes,
// yellow for client error codes, cyan for redirection codes, and uncolored
// for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

// Mount all resource routes
const router = express.Router();

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

apiRouteFactory(router, knex, 'users');
apiRouteFactory(router, knex, 'articles');
apiRouteFactory(router, knex, 'sections');
apiRouteFactory(router, knex, 'comments');
apiRouteFactory(router, knex, 'tags');
apiRouteFactory(router, knex, 'article_tags');
apiRouteFactory(router, knex, 'user_interests');
app.use("/", router);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
