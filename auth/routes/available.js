var express = require('express');
var availabler = require('./available/availabler')
var availableCheck = require('./available/availableCheck')
var sanitizer = require('../middleware/sanitizer')

var successResponse = require('../utils/successResponse');
var sanitizeAvailable = sanitizer(['user'])
var router = express.Router();

var handlePost = availabler(availableCheck, successResponse)

router.post('/', sanitizeAvailable, handlePost);

module.exports = router;

