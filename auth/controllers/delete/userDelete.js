let User = require('../../sequelize/models/User')
const DBError = require('../../utils/DBError')

async function userDeleter(user) {
    try {
        let rowsDestroyed = await User.destroy({ where: { user } })
        if (rowsDestroyed < 1) throw new DBError(400, `User ${user} not found.`)
    }
    catch (error) {
        throw error
    }
}

module.exports = userDeleter