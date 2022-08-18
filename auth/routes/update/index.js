const updater = require("./updater");
const userUpdater = require("./userUpdate");
const userFinder = require("../delete/userFinder");
const loginError = require('../login/loginError');
const generatePassword = require("../../utils/generatePassword");
const loginAuthenticator = require("../login/loginAuthenticator");

let handleUpdate = updater(
    loginAuthenticator,
    generatePassword,
    userFinder,
    userUpdater,
    loginError
)

module.exports = { handleUpdate }