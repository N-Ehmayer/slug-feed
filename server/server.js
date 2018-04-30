/**
 * This is the entry point & core to the backend server.
 *
 * Conceptually, it
 *  - creates an express server
 *  - loads all dependencies
 *  - configures the server via middleware
 *  - mounts all the routes on the express router
 *  - Starts the server
 */
"use strict";

// Load Configs
require('dotenv').config({path: __dirname + '/../.env'});
require('pg').defaults.parseInt8 = true
const ENV = process.env.ENV || "development";
const PORT = process.env.PORT || 3001;


// Load Dependencies
const Auth0Strategy = require('passport-auth0');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require("express");
const flash = require('connect-flash');
const knexConfig = require("./knexfile");
const knexLogger = require('knex-logger');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');


// Create the server & database connection
const app = express();
const knex = require("knex")(knexConfig[ENV]);


// Load Middleware
/**
 * Load the logger first so all (static) HTTP requests are logged to STDOUT
 * 'dev' = Concise output colored by response status for development use.
 *         The :status token will be colored red for server error codes,
 * yellow for client error codes, cyan for redirection codes, and uncolored
 * for all other codes.
 */
app.use(morgan('dev'));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(knexLogger(knex));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));


// Configure Authorization Middleware to use Auth0 via passport
const strategy = new Auth0Strategy({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);
passport.use(strategy);
passport.serializeUser(function(user, done) { done(null, user); });
passport.deserializeUser(function(user, done) { done(null, user); });
app.use(passport.initialize());
app.use(passport.session());


// Give all templates access to the loggedIn flag
app.use(function(req, res, next) {
  res.locals.loggedIn = false;
  if (req.session.passport && typeof req.session.passport.user != 'undefined') {
    res.locals.loggedIn = true;
  }
  next();
});


// Create the Router & Mount Custom Routes
const router = express.Router();
require("./routes/auth0")(router, knex);
require("./routes/api-articles")(router, knex);
require("./routes/api-comments")(router, knex);
require("./routes/api-comment_votes")(router, knex);
require("./routes/api-tags")(router, knex);

// Mount all factory-made resource routes
const apiRouteFactory = require("./routes/api--route-factory.js");
apiRouteFactory(router, knex, 'articles');
apiRouteFactory(router, knex, 'article_tags');
apiRouteFactory(router, knex, 'comments');
apiRouteFactory(router, knex, 'comment_votes');
apiRouteFactory(router, knex, 'sections');
apiRouteFactory(router, knex, 'tags');
apiRouteFactory(router, knex, 'users');
apiRouteFactory(router, knex, 'user_interests');
app.use("/", router);


// Start listening
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
