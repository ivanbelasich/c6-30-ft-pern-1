let Date = require('../../sequelize/models/Date')
let Service = require('../../sequelize/models/Service')

function serviceCreateHandler(exists, creator, errorManager, errorResponse) {
    return async function (req, res, next) {
        try {
            let user = await exists({ where: { user: req.body.user } })
            if (!user) return res.status(400).send(errorResponse("Provider not found"))
            let success = await creator(req.body)
            return res.send({ success: true, message: "Service created successfully" });
        } catch (err) {
            let { status, message } = errorManager(err)
            return res.status(status).send(errorResponse(message))
        }
    }
}

module.exports = serviceCreateHandler