function deleter(dbFinder, dbDeleter, errorMessage) {
    return async function (req, res, next) {
        let { user } = req.body
        try {
            let exists = await dbFinder(user)
            if (!exists) return res.status(400).send(errorMessage(`User ${user} doesn't exist.`))
            let success = await dbDeleter(user)
            if (!success) return res.status(500).send(errorMessage(`There was a problem deleting user ${user}`))
            else return res.send({ success: true, message: `User ${user} was successfully deleted from the database.` })
        } catch (error) {
            return res.status(500).send(errorMessage("There was a problem trying to delete the user."))
        }
    }
}

module.exports = deleter