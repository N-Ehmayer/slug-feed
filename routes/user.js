"use strict";
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

function appendRoutes(router) {

  router.get('/user', ensureLoggedIn, function(req, res) {
    res.render('user', {
      user: req.user,
      userProfile: JSON.stringify(req.user, null, '  ')
    });
  });

};

module.exports = appendRoutes;
