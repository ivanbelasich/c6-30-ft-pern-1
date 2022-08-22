let serviceCreateHandler = require("./serviceCreateHandler")
let dbServiceCreator = require('./dbServiceCreator')
let errorManager = require('../helpers/errorManager')
let errorResponse = require('../helpers/errorResponse')
const findModelEntry = require("../helpers/findModelEntry")
const { Provider, Service } = require("../../sequelize/models")
const serviceDeleteHandler = require("./serviceDeleteHandler")
const deleteModelEntry = require("../helpers/deleteModelEntry")

let createService = serviceCreateHandler(
    findModelEntry(Provider),
    dbServiceCreator,
    errorManager,
    errorResponse
)

let deleteService = serviceDeleteHandler(
    deleteModelEntry(Service),
    errorManager,
    errorResponse
)

module.exports = { createService, deleteService }