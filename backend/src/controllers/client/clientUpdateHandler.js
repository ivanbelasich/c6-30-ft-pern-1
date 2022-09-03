function clientUpdateHandler(updater, errorManager, errMessage) {
    return async function (req, res, next) {
        let { user, ...props } = req.body
        try {
            let success = await updater(user, { user, ...props })
            if (!success) return res.status(400).send(errMessage(`User ${user} not found.`))
            return res.send({ success: true, message: `User ${user} was successfully updated.` })
        } catch (error) {
            let { status, message } = errorManager(error)
            return res.status(status).send(errMessage(message))
        }
    }
}

module.exports = clientUpdateHandler
