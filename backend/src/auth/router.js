'use strict';

const express = require('express');
const router = express.Router();
const authorize = require('../auth/lib/oauth.js');
const User = require('../auth/model.js');
const auth = require('../auth/lib/middleware');
const bodyParser = require('body-parser').json();

router.post('/signup', bodyParser, (req, res, next) => {
  let user = new User(req.body);
  console.log('I am in post');
  user.save()
    .then(user => res.send(user.generateToken()))
    .catch(next);
});

router.get('/login', auth, (req, res, next) => {
  res.cookie('token', req.token);
  res.send(req.token);
});

router.get('/oauth', (req, res, next) => {
  console.log(req.query);

  authorize(req)
    .then(token => {
      res.cookie('token', token);
      res.redirect(process.env.REDIRECT_CLIENT_URI);

    })

    .catch(error => error);

});


module.exports = router;