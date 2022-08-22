const clientCreateHandler = require("./clientCreateHandler");
const checkAvailableUser = require('./checkAvailableUser');
const postWithData = require("../helpers/postWithData");
const buildModelEntry = require('../helpers/buildModelEntry')
const Client = require('../../sequelize/models/Client')
const errorManager = require('../helpers/errorManager')
const errorResponse = require('../helpers/errorResponse');
const extractQuery = require('../helpers/extractQuery')
const findOneUser = require("../helpers/findOneUser");
const findModelEntry = require("../helpers/findModelEntry");
const deleteModelEntry = require('../helpers/deleteModelEntry')
const clientDeleteHandler = require("./clientDeleteHandler");
const deleteWithData = require("../helpers/deleteWithData");
const clientUpdateHandler = require("./clientUpdateHandler");
const updateModelEntry = require("../helpers/updateModelEntry");

const clientCreator = clientCreateHandler(
    "client",
    checkAvailableUser(`${process.env.AUTH_DB_URL}/available`),
    postWithData(`${process.env.AUTH_DB_URL}/register`),
    buildModelEntry(Client),
    errorManager,
    errorResponse
)

const clientFindUser =  findOneUser(
    findModelEntry(Client),
    extractQuery,
    errorManager,
    errorResponse    
)

const clientDeleteUser = clientDeleteHandler(
    findModelEntry(Client),
    deleteWithData(`${process.env.AUTH_DB_URL}/delete`),
    deleteModelEntry(Client),
    errorManager,
    errorResponse
)

const clientUpdateUser = clientUpdateHandler(
    updateModelEntry(Client),
    errorManager,
    errorResponse
)

module.exports = {
    clientCreator,
    clientFindUser,
    clientDeleteUser,
    clientUpdateUser
}
