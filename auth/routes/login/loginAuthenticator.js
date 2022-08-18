const User = require("../../sequelize/models/User")
const dbError = require("../../utils/dbError")
const dbSuccess = require("../../utils/dbSuccess")
const recodePassword = require("../../utils/recodePassword")
const loginError = require("./loginError")
const loginSuccess = require('./loginSuccess')

async function loginAuthenticator(inputUser, inputPassword) {
    let { success, payload, message } = await User.findOne({ where: { user: inputUser } })
        .then(response => dbSuccess(response))
        .catch(error => dbError(error))

    if (!success) return loginError(message)
    if (success && !payload) return loginError("The username does not exist.")

    let { password, salt } = payload.toJSON()
    let result = recodePassword(inputPassword, salt) === password ?
        loginSuccess() :
        loginError("Wrong username or password.")

    return {result, payload}
}
module.exports = loginAuthenticator