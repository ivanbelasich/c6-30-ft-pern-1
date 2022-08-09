var express = require('express');
var authenticate = require('./login/authenticate');
var loginAuthenticator = require('./login/loginAuthenticator');
var loginValidator = require('./login/loginValidator');
var tokenGenerator = require('./login/tokenGenerator');
var authenticationError = require('./login/authenticationError')

var router = express.Router();
var handlePost = authenticate(loginValidator, loginAuthenticator, tokenGenerator, authenticationError)

router.post('/', handlePost);

module.exports = router;

