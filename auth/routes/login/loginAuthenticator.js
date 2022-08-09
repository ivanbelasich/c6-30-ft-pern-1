const User = require("../../sequelize/models/user")
const recodePassword = require("../../utils/recodePassword")

async function loginAuthenticator(inputUser, inputPassword) {
    let userQuery = await User.findOne({ where: { user: inputUser } })
    if (!userQuery) return false
    let { password, salt } = userQuery.toJSON()
    return recodePassword(inputPassword, salt) === password
}
module.exports = loginAuthenticator