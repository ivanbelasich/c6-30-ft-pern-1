let User = require('../../sequelize/models/User')
let dbError = require('../../utils/dbError')
const dbSuccess = require('../../utils/dbSuccess')
let generatePassword = require('../../utils/generatePassword')

async function registerCreator(user, inputPassword, access) {
    let { password, salt } = generatePassword(inputPassword)
    let result = User.create({ user, password, salt, access })
        .then(entry => dbSuccess(entry))
        .catch(error => dbError(error))
    return result
}

module.exports = registerCreator