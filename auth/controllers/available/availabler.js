function availabler(checker, successMessage) {
    return async function (req, res, next) {
        try {
            await checker(req.body.user)
            return res.send(successMessage("Username is available"))
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = availabler