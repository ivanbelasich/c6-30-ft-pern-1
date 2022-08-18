var express = require('express');
var registerCreate = require('./register/registerCreate')
var registerCreator = require('./register/registerCreator')
var createTokens = require('../jwt/createTokens')
var authenticationError = require('./login/authenticationError')
var sanitizer = require('../middleware/sanitizer')
var router = express.Router();

var sanitizeRegister = sanitizer(['user', 'password', 'access'])
var handlePost = registerCreate(registerCreator, createTokens, authenticationError)

router.post('/', sanitizeRegister, handlePost);

module.exports = router;

