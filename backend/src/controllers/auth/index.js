const authLoginHandler = require("./authLoginHandler")
const authFetcher = require('./authFetcher')
const errorManager = require('../helpers/errorManager')

const handleLogin = authLoginHandler(
    authFetcher(`${process.env.AUTH_DB_URL}/login`),
    errorManager)

module.exports = {
    handleLogin,

}
