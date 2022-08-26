const User = require('../../sequelize/models/User')
const AvailError = require('./AvailError')

async function availableCheck(user) {
    try {
        let exists = await User.findOne({ where: { user } })
        if (exists) throw new AvailError(400, "Username already exists")
        else return true
    }
    catch (error) {
        throw error
    }
}

module.exports = availableCheck