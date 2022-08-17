const deleter = require("./deleter");
const userDeleter = require("./userDelete");
const userFinder = require("./userFinder");
const loginError = require('../login/loginError')

let handleDelete = deleter(userFinder, userDeleter, loginError)

module.exports = { handleDelete }