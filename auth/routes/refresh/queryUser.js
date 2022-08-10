let User = require('../../sequelize/models/User')
let dbSuccess = require('../../utils/dbSuccess')
let dbError = require('../../utils/dbError')

async function queryUser(user) {
    let response = await User.findOne({ where: { user } })
        .then(res => dbSuccess(res))
        .catch(err => dbError(err))
    return response
}

module.exports = queryUser