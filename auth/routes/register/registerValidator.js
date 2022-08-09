let User = require('../../sequelize/models/User')
const DUMMY_SALT = "a 16 char string"

async function registerValidator(user, password) {
    return true
}

module.exports = registerValidator