var express = require('express');
var authenticate = require('./login/authenticate');
var loginAuthenticator = require('./login/loginAuthenticator');
var createTokens = require('../jwt/createTokens');
var sanitizer = require('../middleware/sanitizer');
var findEntry = require('./login/findEntry');
var payloadResponse = require('../utils/payloadResponse')

var router = express.Router();
var sanitizeLogin = sanitizer(["user", "password"])
var handlePost = authenticate(findEntry, loginAuthenticator, createTokens, payloadResponse)

router.post('/', sanitizeLogin, handlePost);

module.exports = router;

