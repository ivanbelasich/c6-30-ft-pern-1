let providerCreateHandler = require('../client/clientCreateHandler')
let checkAvailableUser = require('../client/checkAvailableUser')
let Provider = require('../../sequelize/models/Provider')
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


let providerCreateUser = providerCreateHandler(
    "provider",
    checkAvailableUser(`${process.env.AUTH_DB_URL}/available`),
    postWithData(`${process.env.AUTH_DB_URL}/register`),
    buildModelEntry(Provider),
    errorManager,
    errorResponse
)

let providerFindUser = findOneUser(
    findModelEntry(Provider),
    extractQuery,
    errorManager,
    errorResponse,
)

const providerDeleteUser = providerDeleteHandler(
    findModelEntry(Provider),
    deleteWithData(`${process.env.AUTH_DB_URL}/delete`),
    deleteModelEntry(Provider),
    errorManager,
    errorResponse
)

const providerUpdateUser = providerUpdateHandler(
    updateModelEntry(Provider),
    errorManager,
    errorResponse
)

module.exports = {
    providerCreateUser,
    providerFindUser,
    providerDeleteUser,
    providerUpdateUser
}