function registerCreate(availabler, creator, passwordGenerator, tokenGenerator, payloadMessage) {
    return async function (req, res, next) {
        try {
            let { user, password: inputPassword, access } = req.body
            let { password, salt } = passwordGenerator(inputPassword)
            let data = { user, password, salt, access }
            await availabler(user)
            await creator(data)
            let tokens = tokenGenerator(user, access)
            res.send(payloadMessage({ user, access, tokens }))
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = registerCreate