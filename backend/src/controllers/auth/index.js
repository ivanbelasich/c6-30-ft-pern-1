const authLoginHandler = require("./authLoginHandler")
const authFetcher = require('./authFetcher')
const errorManager = require('../helpers/errorManager')
const errorResponse = require("../helpers/errorResponse")
const refreshPostHandler = require('./refreshPostHandler')
const refresher = require('./refresher')

const handleLogin = authLoginHandler(
    authFetcher(`${process.env.AUTH_DB_URL}/login`),
    errorManager,
    errorResponse
)

const handleRefresh = refreshPostHandler(
    refresher(`${process.env.AUTH_DB_URL}/refresh`),
    errorManager,
    errorResponse
)

module.exports = {
    handleLogin,
    handleRefresh
}
