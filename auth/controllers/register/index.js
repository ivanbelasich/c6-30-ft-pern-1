var registerCreate = require('./registerCreate')
var registerCreator = require('./registerCreator')
var createTokens = require('../../jwt/createTokens')
var generatePassword = require('../../utils/generatePassword');
var availableCheck = require('../../controllers/available/availableCheck');
var payloadResponse = require('../../utils/payloadResponse');

var handlePost = registerCreate(
    availableCheck,
    registerCreator,
    generatePassword,
    createTokens,
    payloadResponse
)

module.exports = { handlePost }