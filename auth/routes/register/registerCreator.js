let User = require('../../sequelize/models/User')
let dbError = require('../../utils/dbError')
const dbSuccess = require('../../utils/dbSuccess')
let generatePassword = require('../../utils/generatePassword')

async function registerCreator(user, inputPassword) {
    let { password, salt } = generatePassword(inputPassword)
    let result = User.create({ user, password, salt, })
        .then(entry => dbSuccess(entry))
        .catch(error => dbError(error))
    return result
}

module.exports = registerCreator