function authenticate(finder, authenticator, tokenGenerator, payloadResponse) {
    return async function (req, res, next) {
        try {
            let { user: inputUser, password: inputPassword } = req.body
            let { user, password, salt, access } = await finder(inputUser)
            let result = await authenticator(inputPassword, password, salt)
            let tokens = tokenGenerator(user, access)
            res.send(payloadResponse({ user, access, tokens }))
        } catch (error) {
            next(error)
        }

    }
}

module.exports = authenticate