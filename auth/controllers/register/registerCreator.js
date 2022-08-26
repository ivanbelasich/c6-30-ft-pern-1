let User = require('../../sequelize/models/User')
async function registerCreator(data) {
    try {
        let result = await User.create(data)
        return true
    }
    catch (error) {
        throw error
    }
}

module.exports = registerCreator