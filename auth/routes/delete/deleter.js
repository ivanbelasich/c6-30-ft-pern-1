function deleter(dbDeleter, successMessage) {
    return async function (req, res, next) {
        let { user } = req.body
        try {
            await dbDeleter(user)
            return res.send(successMessage(`User ${user} was successfully deleted from the database.`))
        } catch (error) {
            next(error)
        }
    }
}

module.exports = deleter