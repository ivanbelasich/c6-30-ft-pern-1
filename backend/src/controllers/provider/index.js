let providerCreateHandler = require('../client/clientCreateHandler')
let checkAvailableUser = require('../client/checkAvailableUser')
let Provider = require('../../sequelize/models/Provider')
let Service = require('../../sequelize/models/Service')
let Date = require('../../sequelize/models/Date')
let errorManager = require('../helpers/errorManager')
let errorResponse = require('../helpers/errorResponse')
let findOneUser = require('../helpers/findOneUser')
let buildModelEntry = require('../helpers/buildModelEntry')
let findModelEntry = require('../helpers/findModelEntry')
let extractQuery = require('../helpers/extractQuery')
let providerDeleteHandler = require('../client/clientDeleteHandler')
let providerUpdateHandler = require('../client/clientUpdateHandler')
let postWithData = require('../helpers/postWithData')
let deleteWithData = require('../helpers/deleteWithData')
let deleteModelEntry = require('../helpers/deleteModelEntry')
let updateModelEntry = require('../helpers/updateModelEntry')
let findProviderIncludeService = require('./findProviderIncludeService')
let findOneQuery = require('../helpers/findOneQuery')
let findModelEntryInclude = require('../helpers/findModelEntryInclude')
let findModelEntriesInclude = require('../helpers/findModelEntriesInclude')
let extractParameter = require('../helpers/extractParameter')

let providerCreateUser = providerCreateHandler(
    "provider",
    checkAvailableUser(`${process.env.AUTH_DB_URL}/available`),
    postWithData(`${process.env.AUTH_DB_URL}/register`),
    buildModelEntry(Provider),
    errorManager,
    errorResponse
)

let providerFindUser = findOneQuery(
    findModelEntryInclude(Provider, [{ model: Service, include: Date}]),
    extractParameter("user"),
    errorManager,
    errorResponse
)


let providerFindUsers = findOneQuery(
    findModelEntriesInclude(Provider, [{ model: Service, include: Date}]),
    extractQuery,
    errorManager,
    errorResponse
)


let providerDeleteUser = providerDeleteHandler(
    findModelEntry(Provider),
    deleteWithData(`${process.env.AUTH_DB_URL}/delete`),
    deleteModelEntry(Provider),
    errorManager,
    errorResponse
)

let providerUpdateUser = providerUpdateHandler(
    updateModelEntry(Provider),
    errorManager,
    errorResponse
)

module.exports = {
    providerCreateUser,
    providerFindUser,
    providerFindUsers,
    providerDeleteUser,
    providerUpdateUser
}