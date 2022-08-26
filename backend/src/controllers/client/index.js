let clientCreateHandler = require("./clientCreateHandler");
let checkAvailableUser = require('./checkAvailableUser');
let postWithData = require("../helpers/postWithData");
let buildModelEntry = require('../helpers/buildModelEntry')
let errorManager = require('../helpers/errorManager')
let errorResponse = require('../helpers/errorResponse');
let extractQuery = require('../helpers/extractQuery')
let findOneUser = require("../helpers/findOneUser");
let findModelEntry = require("../helpers/findModelEntry");
let findModelEntryInclude = require("../helpers/findModelEntryInclude");
let deleteModelEntry = require('../helpers/deleteModelEntry')
let clientDeleteHandler = require("./clientDeleteHandler");
let deleteWithData = require("../helpers/deleteWithData");
let clientUpdateHandler = require("./clientUpdateHandler");
let updateModelEntry = require("../helpers/updateModelEntry");
let { Order, Client } = require("../../sequelize/models");
const findOneQuery = require("../helpers/findOneQuery");
const findModelEntriesInclude = require("../helpers/findModelEntriesInclude");
const extractParameter = require("../helpers/extractParameter");

let clientCreator = clientCreateHandler(
    "client",
    checkAvailableUser(`${process.env.AUTH_DB_URL}/available`),
    postWithData(`${process.env.AUTH_DB_URL}/register`),
    buildModelEntry(Client),
    errorManager,
    errorResponse
)

let clientFindUser =  findOneQuery(
    findModelEntryInclude(Client, Order),
    extractParameter("user"),
    errorManager,
    errorResponse    
)


let clientFindUsers = findOneQuery(
    findModelEntriesInclude(Client, Order),
    extractQuery,
    errorManager,
    errorResponse
)

let clientDeleteUser = clientDeleteHandler(
    findModelEntry(Client),
    deleteWithData(`${process.env.AUTH_DB_URL}/delete`),
    deleteModelEntry(Client),
    errorManager,
    errorResponse
)

let clientUpdateUser = clientUpdateHandler(
    updateModelEntry(Client),
    errorManager,
    errorResponse
)

module.exports = {
    clientCreator,
    clientFindUser,
    clientFindUsers,
    clientDeleteUser,
    clientUpdateUser
}
