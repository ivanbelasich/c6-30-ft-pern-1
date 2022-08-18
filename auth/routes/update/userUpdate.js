let User = require('../../sequelize/models/User')

async function userUpdate(user, password, salt) {
    try {
        let updated = await User.update({ password, salt }, { where: { user } })
        return updated > 0
    }
    catch (error) {
        throw error
    }
}

module.exports = userUpdate