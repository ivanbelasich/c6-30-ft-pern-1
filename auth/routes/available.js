var express = require('express');
var availabler = require('./available/availabler')
var availableCheck = require('./available/availableCheck')
var authError = require('./login/authenticationError');

var router = express.Router();
var handlePost = availabler(availableCheck, authError)

router.post('/', handlePost);

module.exports = router;

