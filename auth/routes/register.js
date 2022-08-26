var express = require('express');
var registerCreate = require('./register/registerCreate')
var registerCreator = require('./register/registerCreator')
var createTokens = require('../jwt/createTokens')
var sanitizer = require('../middleware/sanitizer');
var generatePassword = require('../utils/generatePassword');
var availableCheck = require('../controllers/available/availableCheck');
var payloadResponse = require('../utils/payloadResponse');
var router = express.Router();

var sanitizeRegister = sanitizer(['user', 'password', 'access'])
var handlePost = registerCreate(
    availableCheck,
    registerCreator,
    generatePassword,
    createTokens,
    payloadResponse
)

router.post('/', sanitizeRegister, handlePost);

module.exports = router;

