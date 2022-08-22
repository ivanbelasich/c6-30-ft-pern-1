let serviceCreateHandler = require("./serviceCreateHandler")
let errorManager = require('../helpers/errorManager')
let errorResponse = require('../helpers/errorResponse')

let createService = serviceCreateHandler(errorManager, errorResponse)

module.exports = { createService }