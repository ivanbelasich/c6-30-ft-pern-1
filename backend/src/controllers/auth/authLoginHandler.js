function authLoginHandler(fetcher, errorManager) {
    return async function (req, res, next) {
        let { user, password } = req.body
        try {
            let { data } = await fetcher(`${process.env.AUTH_DB_URL}/login`, user, password)
            return res.status(200).send(data)
        }
        catch (error) {
            let result = errorManager(error)
            return res.status(result.status).send(result.json)
        }
    }
}

module.exports = authLoginHandler