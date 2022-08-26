function updater(authenticate, encrypter, dbFinder, dbUpdater, successMessage) {
    return async function (req, res, next) {
        let { user, password: oldPassword, newPassword } = req.body
        try {
            let { password: storedPassword, salt: storedSalt } = await dbFinder(user)
            await authenticate(oldPassword, storedPassword, storedSalt)

            let { password, salt } = await encrypter(newPassword)
            await dbUpdater(user, password, salt)

            return res.send(successMessage(`User ${user} was successfully updated.`))
        } catch (error) {
            next(error)
        }
    }
}

module.exports = updater