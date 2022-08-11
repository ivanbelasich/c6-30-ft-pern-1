var express = require('express');
var router = express.Router();

var refresher = require('./refresh/refresher')
var getAccessToken = require('./refresh/getAccessToken')
var tokenDecode = require('../jwt/tokenDecode')
var tokenValidate = require('../jwt/tokenValidate')
var queryUser = require('./refresh/queryUser')
var tokenError = require('./refresh/tokenError')
var createTokens = require('../jwt/createTokens')

let handlePost = refresher(getAccessToken, tokenDecode, tokenValidate, queryUser, tokenError, createTokens)

router.post('/', handlePost);

module.exports = router;

