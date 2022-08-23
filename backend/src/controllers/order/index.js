let orderCreateHandler = require("./orderCreateHandler")
let findModelEntryInclude = require('../helpers/findModelEntryInclude')
let buildModelEntry = require('../helpers/buildModelEntry')
let errorManager = require('../helpers/errorManager')
let errorResponse = require('../helpers/errorResponse')
let isDateTaken = require("../helpers/isDateTaken")

let { Service, Order, Provider } = require("../../sequelize/models")

let createOrder = orderCreateHandler(
    findModelEntryInclude(Service, [Order, Provider]),
    isDateTaken,
    buildModelEntry(Order),
    errorManager,
    errorResponse
)


module.exports = {
    createOrder
}