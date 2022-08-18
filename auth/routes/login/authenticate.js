function authenticate(validator, authenticator, tokenGenerator, authenticationError) {
    return async function (req, res, next) {
        let { user, password } = req.body

        const isValid = validator(user, password)
        if (!isValid) return res.status(400).send(authenticationError("Invalid username or password"))

        const { result, message, payload } = await authenticator(user, password)
        
        if (!result.result) return res.status(403).send(authenticationError(result.message))
        else res.send(tokenGenerator(user, payload.access))
    }
}

module.exports = authenticate