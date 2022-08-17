let User = require('../../sequelize/models/User')

async function userDeleter(user) {
    try {
        let rowsDestroyed = await User.destroy({ where: { user } })
        return rowsDestroyed > 0
    }
    catch (error) {
        throw error
    }
}

module.exports = userDeleter