let serviceCreateHandler = require("./serviceCreateHandler")
let dbServiceCreator = require('./dbServiceCreator')
let errorManager = require('../helpers/errorManager')
let errorResponse = require('../helpers/errorResponse')
let findModelEntry = require("../helpers/findModelEntry")
let serviceDeleteHandler = require("./serviceDeleteHandler")
let deleteModelEntry = require("../helpers/deleteModelEntry")
let findOneQuery = require("../helpers/findOneQuery")
let extractQuery = require("../helpers/extractQuery")
let extractParameter = require("../helpers/extractParameter")
let findModelEntryInclude = require("../helpers/findModelEntryInclude")
let findModelEntriesInclude = require("../helpers/findModelEntriesInclude")
let { Provider, Service, Date, Order } = require("../../sequelize/models")

let getOneService = findOneQuery(
    findModelEntryInclude(Service, [Date, Order]),
    extractParameter("id"),
    errorManager,
    errorResponse
)

let getAllServices = findOneQuery(
    findModelEntriesInclude(Service, [Date, Order]),
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

module.exports = {
    createService,
    deleteService,
    getOneService,
    getAllServices
}