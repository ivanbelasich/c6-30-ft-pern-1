let serviceCreateHandler = require("./serviceCreateHandler")
let dbServiceCreator = require('./dbServiceCreator')
let errorManager = require('../helpers/errorManager')
let errorResponse = require('../helpers/errorResponse')
const findModelEntry = require("../helpers/findModelEntry")
const { Provider } = require("../../sequelize/models")

let createService = serviceCreateHandler(
    findModelEntry(Provider),
    dbServiceCreator,
    errorManager,
    errorResponse
)

module.exports = { createService }