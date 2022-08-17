function updater(authenticate, encrypter, dbFinder, dbUpdater, errorMessage) {
    return async function (req, res, next) {
        let { user, password: oldPassword, newPassword } = req.body
        try {
            let exists = await dbFinder(user)
            if (!exists) return res.status(400).send(errorMessage(`User ${user} doesn't exist.`))

            let { result, message } = await authenticate(user, oldPassword)
            if (!result) return res.status(403).send(errorMessage(message))

            let { password, salt } = await encrypter(newPassword)

            let success = await dbUpdater(user, password, salt)
            if (!success) return res.status(500).send(errorMessage(`There was a problem updating user ${user}`))

            else return res.send({ success: true, message: `User ${user} was successfully updated.` })
        } catch (error) {
            return res.status(500).send(errorMessage("There was a problem trying to update the user."))
        }
    }
}

module.exports = updater