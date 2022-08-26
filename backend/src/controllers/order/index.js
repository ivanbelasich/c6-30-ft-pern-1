let { Service, Order, Provider, Date, Client } = require("../../sequelize/models")
let orderCreateHandler = require("./orderCreateHandler")
let findModelEntryInclude = require('../helpers/findModelEntryInclude')
let buildModelEntry = require('../helpers/buildModelEntry')
let errorManager = require('../helpers/errorManager')
let errorResponse = require('../helpers/errorResponse')
let isDateTaken = require("../helpers/isDateTaken")
let orderDeleteHandler = require("./orderDeleteHandler")
let deleteModelEntry = require("../helpers/deleteModelEntry")
let isDateAvailable = require("../helpers/isDateAvailable")
let orderUpdateHandler = require("./orderUpdateHandler")
let findModelEntry = require("../helpers/findModelEntry")
let updateOrderEntry = require("./updateOrderEntry")
let findOneQuery = require('../helpers/findOneQuery')
let extractParameter = require('../helpers/extractParameter')

let getOrder = findOneQuery(
    findModelEntryInclude(Order, [Client, Provider, Service]),
    extractParameter("id"),
    errorManager,
    errorResponse
)

let createOrder = orderCreateHandler(
    findModelEntryInclude(Service, [Order, Provider, Date]),
    isDateAvailable,
    isDateTaken,
    buildModelEntry(Order),
    errorManager,
    errorResponse
)

let deleteOrder = orderDeleteHandler(
    deleteModelEntry(Order),
    errorManager,
    errorResponse
)

let updateOrder = orderUpdateHandler(
    findModelEntry(Order),
    updateOrderEntry,
    errorManager,
    errorResponse
)

module.exports = {
    createOrder,
    deleteOrder,
    updateOrder,
    getOrder
}