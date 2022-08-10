function authenticate(validator, authenticator, tokenGenerator, authenticationError) {
    return async function (req, res, next) {
        let { user, password } = req.body

        const isValid = validator(user, password)
        if (!isValid) return res.status(400).send(authenticationError("Invalid username or password"))

        const {result, message} = await authenticator(user, password)
        if (!result) return res.status(403).send(authenticationError(message))

        else res.send(tokenGenerator())
    }
}

module.exports = authenticate