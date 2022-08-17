let providerCreateHandler = require('../client/clientCreateHandler')
let checkAvailableUser = require('../client/checkAvailableUser')
let Provider = require('../../sequelize/models/Provider')
let errorManager = require('../helpers/errorManager')
let errorResponse = require('../helpers/errorResponse')
let findOneUser = require('../helpers/findOneUser')
let buildModelEntry = require('../helpers/buildModelEntry')
let findModelEntry = require('../helpers/findModelEntry')
let extractQuery = require('../helpers/extractQuery')


let handleCreateProvider = providerCreateHandler(
    checkAvailableUser(checkAvailableUser(`${process.env.AUTH_DB_URL}/available`),),
    postWithData(`${process.env.AUTH_DB_URL}/register`),
    buildModelEntry(Provider),
    errorManager,
    errorResponse
)
let handleFindProvider = findOneUser(
    findModelEntry(Provider),
    extractQuery,
    errorResponse,
)
let handleDeleteProvider = 

module.exports = { handleCreateProvider, handleFindProvider }