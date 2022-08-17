function authLoginHandler(fetcher, errorManager, errorResponse) {
    return async function (req, res, next) {
        let { user, password } = req.body
        try {
            let { data } = await fetcher(`${process.env.AUTH_DB_URL}/login`, user, password)
            return res.status(200).send(data)
        }
        catch (error) {
            let {status, message} = errorManager(error)
            return res.status(status).send(errorResponse(message))
        }
    }
}

module.exports = authLoginHandler