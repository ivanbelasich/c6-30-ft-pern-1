var authenticate = require('./authenticate');
var loginAuthenticator = require('./loginAuthenticator');
var createTokens = require('../../jwt/createTokens');
var findEntry = require('./findEntry');
var payloadResponse = require('../../utils/payloadResponse')

var handlePostLogin = authenticate(findEntry, loginAuthenticator, createTokens, payloadResponse)

module.exports = { handlePostLogin }