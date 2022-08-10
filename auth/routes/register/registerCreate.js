function registerCreate(validator, creator, tokenGenerator, registerError) {
    return async function (req, res, next) {
        let { user, password } = req.body

        let isValid = validator(user, password)
        if (!isValid) return res.status(400).send(registerError("Invalid username or password"))

        const result = await creator(user, password)
        if (!result) res.status(403).send(registerError("There was a problem registering the user"))
        else if (!result.success) res.status(400).send(registerError(result.message))
        else res.send(tokenGenerator(user))
    }
}

module.exports = registerCreate