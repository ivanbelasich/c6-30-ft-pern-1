const authLoginHandler = require("./authLoginHandler")
const authFetcher = require('./authFetcher')
const errorManager = require('../helpers/errorManager')
const errorResponse = require("../helpers/errorResponse")

const handleLogin = authLoginHandler(
    authFetcher(`${process.env.AUTH_DB_URL}/login`),
    errorManager,
    errorResponse)

module.exports = {
    handleLogin,
}
