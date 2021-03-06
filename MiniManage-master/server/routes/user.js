// Generated by CoffeeScript 1.12.7
(function() {
  var commonBiz, express, router, userBiz;

  express = require('express');

  router = express.Router();

  userBiz = require('./../bizs/userBiz');

  commonBiz = require('./../bizs/commonBiz');

  router.post('/user/register', userBiz.validUserExists, userBiz.register);

  router.post('/user/login', userBiz.login);

  router.post('/user/logout', commonBiz.setUserInfo, commonBiz.validateUserInfo, userBiz.logout);

  router.post('/user/autologin', userBiz.autoLogin);

  module.exports = router;

}).call(this);

//# sourceMappingURL=user.js.map
