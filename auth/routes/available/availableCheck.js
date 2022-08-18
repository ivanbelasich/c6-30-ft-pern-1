const User = require('../../sequelize/models/User')

async function availableCheck(user) {
    try {
        let exists = await User.findOne({ where: { user } })
        if (exists) return false
        else return true

    }
    catch (error) {
        throw error
    }
}

module.exports = availableCheck