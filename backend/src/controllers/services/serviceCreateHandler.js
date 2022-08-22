let Date = require('../../sequelize/models/Date')
let Service = require('../../sequelize/models/Service')

function serviceCreateHandler(errorManager, errorResponse) {
    return async function (req, res, next) {
        try {
            const { user, name, value, date, description } = req.body;
            const ServiceData = await Service.create({
                userName: user,
                name,
                value,
                description,
            })
            await ServiceData.createDate(date)
            return res.send({ success: true, message: "Service created successfully" });
        } catch (err) {
            let { status, message } = errorManager(err)
            return res.status(status).send(errorResponse(message))
        }
    }
}

module.exports = serviceCreateHandler