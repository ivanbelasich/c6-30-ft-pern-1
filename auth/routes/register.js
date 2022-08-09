var express = require('express');
var registerCreate = require('./register/registerCreate')
var registerCreator = require('./register/registerCreator')
var registerValidator = require('./register/registerValidator')
var tokenGenerator = require('./login/tokenGenerator')
var authenticationError = require('./login/authenticationError')

var router = express.Router();
var handlePost = registerCreate(registerValidator, registerCreator, tokenGenerator, authenticationError)

router.post('/', handlePost);

module.exports = router;

