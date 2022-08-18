var express = require('express');
var authenticate = require('./login/authenticate');
var loginAuthenticator = require('./login/loginAuthenticator');
var createTokens = require('../jwt/createTokens');
var authenticationError = require('./login/authenticationError')
var sanitizer = require('../middleware/sanitizer')

var router = express.Router();
var sanitizeLogin = sanitizer(["user", "password"])
var handlePost = authenticate(loginAuthenticator, createTokens, authenticationError)

router.post('/', sanitizeLogin, handlePost);

module.exports = router;

