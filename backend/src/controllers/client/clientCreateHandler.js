function clientCreateHandler(availabilityChecker, postAuth, postDB, errorManager, errMessage) {
    return async function (req, res, next) {
        let { user, password, ...props } = req.body
        try {
            let available = await availabilityChecker(user)
            if (!available) return res.status(400).send(errMessage("Username not available."))
            let [authResponse, dbResponse] = await Promise.all([
                postAuth({ user, password }),
                postDB({ user, ...props })
            ])
            let { data: tokens } = authResponse
            return res.send(tokens)
        } catch (error) {
            let { status, json } = errorManager(error)
            return res.status(status).send(json)
        }
    }
}

module.exports = clientCreateHandler