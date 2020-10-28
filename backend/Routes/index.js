const express = require('express');

const router = express.Router();
const authRoutes = require('./AuthRoutes');

module.exports = function (app, passport) {
  router.use(authRoutes(app, passport));

  // Can add more routing files below:

  return router;
};
