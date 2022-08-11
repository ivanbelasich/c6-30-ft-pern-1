var express = require('express');
var registerCreate = require('./register/registerCreate')
var registerCreator = require('./register/registerCreator')
var registerValidator = require('./register/registerValidator')
var createTokens = require('../jwt/createTokens')
var authenticationError = require('./login/authenticationError')

var router = express.Router();
var handlePost = registerCreate(registerValidator, registerCreator, createTokens, authenticationError)

router.post('/', handlePost);

module.exports = router;

