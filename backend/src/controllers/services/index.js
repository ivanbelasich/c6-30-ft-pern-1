let serviceCreateHandler = require("./serviceCreateHandler")
let dbServiceCreator = require('./dbServiceCreator')
let errorManager = require('../helpers/errorManager')
let errorResponse = require('../helpers/errorResponse')
const findModelEntry = require("../helpers/findModelEntry")
const { Provider, Service, Date } = require("../../sequelize/models")
const serviceDeleteHandler = require("./serviceDeleteHandler")
const deleteModelEntry = require("../helpers/deleteModelEntry")
const findOneQuery = require("../helpers/findOneQuery")
const extractQuery = require("../helpers/extractQuery")
const findModelEntryInclude = require("../helpers/findModelEntryInclude")
const findModelEntriesInclude = require("../helpers/findModelEntriesInclude")

let getOneService = findOneQuery(
    findModelEntryInclude(Service, Date),
    extractQuery,
    errorManager,
    errorResponse
)

let getAllServices = findOneQuery(
    findModelEntriesInclude(Service, Date),
    extractQuery,
    errorManager,
    errorResponse
)

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

module.exports = { createService, deleteService, getOneService, getAllServices }