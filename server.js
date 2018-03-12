"use strict";

require('dotenv').config();

const express = require("express");
const knexConfig = require("./knexfile");
const knexLogger = require('knex-logger');
const morgan = require('morgan');
const sass = require("node-sass-middleware");

const PORT = process.env.PORT || 3000;
const ENV = process.env.ENV || "development";
const app = express();

const knex = require("knex")(knexConfig[ENV]);

app.set("view engine", "ejs");
app.use("/styles", sass({
  src: __dirname + "/sass",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

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

require("./routes/index")(router, knex);
require("./routes/api-article")(router);

const apiRouteFactory = require("./routes/api-route-factory.js");
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
