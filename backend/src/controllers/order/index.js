let orderCreateHandler = require("./orderCreateHandler")
let findModelEntryInclude = require('../helpers/findModelEntryInclude')
let dateChecker = require('../helpers/dateChecker')
let buildModelEntry = require('../helpers/buildModelEntry')
let errorManager = require('../helpers/errorManager')
let errorResponse = require('../helpers/errorResponse')

let { Service, Order } = require("../../sequelize/models")

let createOrder = orderCreateHandler(
    findModelEntryInclude(Service, Order),
    dateChecker,
    buildModelEntry(Order),
    errorManager,
    errorResponse
)


module.exports = {
    createOrder
}