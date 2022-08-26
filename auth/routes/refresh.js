var express = require('express');
var router = express.Router();

var refresher = require('./refresh/refresher')
var getAccessToken = require('./refresh/getAccessToken')
var tokenDecode = require('../jwt/tokenDecode')
var tokenValidate = require('../jwt/tokenValidate')
var findEntry = require('../controllers/login/findEntry')
var payloadResponse = require('../utils/payloadResponse')
var createTokens = require('../jwt/createTokens')
var sanitizer = require('../middleware/sanitizer')

let handlePost = refresher(getAccessToken, tokenDecode, tokenValidate, findEntry, createTokens, payloadResponse)
let sanitizeRefresh = sanitizer(['refreshToken'])

router.post('/', sanitizeRefresh, handlePost);

module.exports = router;

