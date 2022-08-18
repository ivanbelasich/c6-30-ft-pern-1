let User = require('../../sequelize/models/User')

async function userFinder(user) {
    try {
        let exists = await User.findOne({ where: { user } })
        return !!exists
    }
    catch (error) {
        throw error
    }
}

module.exports = userFinder