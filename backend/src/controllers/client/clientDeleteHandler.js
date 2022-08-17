function clientDeleteHandler(dbFinder, authDelete, dbDelete, errorResponse) {
    return async function (req, res, next) {
        let { user } = req.body
        try {
            let exists = await dbFinder({ where: user })
            if (!exists) return res.send(400).status(errorResponse(`Client ${user} not found.`))
            let [authResponse, dbResponse] = await Promise.all(authDelete(user), dbDelete(user))
            return res.send({success:true, message: `Client ${user} successfully deleted.`})
        }
        catch(error){
            let {status, json} = errorManager(error)
            return res.status(status).send(json)
        }
    }
}

module.exports = clientDeleteHandler