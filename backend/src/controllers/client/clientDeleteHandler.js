function clientDeleteHandler(dbFinder, authDelete, dbDelete, errorManager, errorResponse) {
    return async function (req, res, next) {
        let { user } = req.body
        try {
            let exists = await dbFinder({ where: { user } })
            if (!exists) return res.status(400).send(errorResponse(`User ${user} not found.`))
            let [authResponse, dbResponse] = await Promise.all([
                authDelete({ user }),
                dbDelete({ user })
            ])
            return res.send({ success: true, message: `User ${user} successfully deleted.` })
        }
        catch (error) {
            let { status, message } = errorManager(error)
            return res.status(status).send(errorResponse(message))
        }
    }
}

module.exports = clientDeleteHandler