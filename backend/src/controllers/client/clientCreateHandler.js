function clientCreateHandler(access, availabilityChecker, postAuth, postDB, errorManager, errMessage) {
    return async function (req, res, next) {
        let { user, password, ...props } = req.body
        try {
            let available = await availabilityChecker(user)
            if (!available) return res.status(400).send(errMessage("Username not available."))
            let [authResponse, dbResponse] = await Promise.all([
                postAuth({ user, password, access }),
                postDB({ user, ...props })
            ])
            let { data: tokens } = authResponse
            return res.send(tokens)
        } catch (error) {
            let { status, message } = errorManager(error)
            return res.status(status).send(errMessage(message))
        }
    }
}

module.exports = clientCreateHandler