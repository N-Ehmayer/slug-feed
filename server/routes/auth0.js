/** Authentication/Authorization routes using Auth0 */
"use strict";

require('dotenv').config();
const passport = require('passport');
const flash = require('connect-flash');

function appendRoutes(router, knex) {

  // Perform the login
  router.get('/login', passport.authenticate('auth0', {
      clientID: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_DOMAIN,
      redirectUri: process.env.AUTH0_CALLBACK_URL,
      responseType: 'code',
      audience: 'https://' + process.env.AUTH0_DOMAIN + '/userinfo',
      scope: 'openid profile'
    }),
    function(req, res) {
      res.redirect("/");
    });

  // Perform session logout and redirect to homepage
  router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Perform the final stage of authentication and redirect to '/'
  router.get('/callback',
    passport.authenticate('auth0', {
      failureRedirect: '/failure'
    }),
    function(req, res) {
      knex.raw(
        `INSERT INTO users ( id, profile )
        VALUES ( :id, :profile )
        ON CONFLICT ( id ) DO UPDATE
        SET profile = :profile
        RETURNING *`, { id: req.user.id, profile: req.user }
      ).then(() => res.redirect('/'));
    }
  );

  // Deal with any login failures
  router.get('/failure', function(req, res) {
    var error = req.flash("error");
    var error_description = req.flash("error_description");
    req.logout();
    res.json({
      error: error[0],
      error_description: error_description[0],
    });
  });

  // Route for the front-end to check for a session
  router.get('/api/session', (request, response) => {
    response.json(request.user || {});
  });

};

module.exports = appendRoutes;
