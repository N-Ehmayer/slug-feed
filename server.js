"use strict";

require('dotenv').config();

const express = require("express");
const knexConfig = require("./knexfile");
const knexLogger = require('knex-logger');
const morgan = require('morgan');
const sass = require("node-sass-middleware");
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'shhhhhhhhh',
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes,
// yellow for client error codes, cyan for redirection codes, and uncolored
// for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

// Configure Passport to use Auth0
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
require("./routes/index")(router, knex);
require("./routes/auth0")(router);
require("./routes/user")(router);
require("./routes/article")(router);
require("./routes/api-articles-id")(router, knex);

// Mount all factory-made resource routes
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
