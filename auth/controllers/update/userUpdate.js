let User = require('../../sequelize/models/User')
let DBError = require('../../utils/DBError')

async function userUpdate(user, password, salt) {
    try {
        let updated = await User.update({ password, salt }, { where: { user } })
        if (updated < 1) throw new DBError(`There was a problem while updating user ${user}`)
        else return true
    }
    catch (error) {
        throw error
    }
}

module.exports = userUpdate