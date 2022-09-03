function refreshPostHandler(authFetcher, errorManager, errorResponse) {
    return async function (req, res, next) {
        let { authorization } = req.headers
        let { refreshToken } = req.body
        if (!authorization) return res.status(400).send(errorResponse("Missing authorization header."))
        try {
            let tokens = await authFetcher(authorization, refreshToken)
            return res.send({ ...tokens })
        } catch (error) {

            let { message, status } = errorManager(error)
            return res.status(status).send(errorResponse(message))
        }
    }
}

module.exports = refreshPostHandler