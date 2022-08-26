var availabler = require('./availabler')
var availableCheck = require('./availableCheck')
var successResponse = require('../../utils/successResponse');
var handlePost = availabler(availableCheck, successResponse)

module.exports = { handlePost }