let Service = require('../../sequelize/models/Service')

async function dbServiceCreator(props) {
    let { date, user, ...rest } = props
    try {
        let service = await Service.create({
            userName: user,
            ...rest
        })
        let success = await service.createDate(date)
        if(!success) return false
        else return true
    } catch (error) {
        throw error
    }
}

module.exports = dbServiceCreator