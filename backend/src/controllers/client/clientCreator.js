const clientCreateHandler = require("./clientCreateHandler");
const checkAvailableUser = require('./checkAvailableUser');
const postWithData = require("../helpers/postWithData");
const buildModelEntry = require('../helpers/buildModelEntry')
const Client = require('../../sequelize/models/Client')
const errorManager = require('../helpers/errorManager')
const errorResponse = require('../helpers/errorResponse')

const clientCreator = clientCreateHandler(
    checkAvailableUser,
    postWithData,
    buildModelEntry(Client),
    errorManager,
    errorResponse
)

module.exports = clientCreator
