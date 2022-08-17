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
const clientDeleteHandler = require("./clientDeleteHandler");
const deleteWithData = require("../helpers/deleteWithData");

const clientCreator = clientCreateHandler(
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
    deleteWithData
)

module.exports = {
    clientCreator,
    clientFindUser
}
