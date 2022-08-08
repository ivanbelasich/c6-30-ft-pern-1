function authenticate(validator, authenticator, tokenGenerator, authenticationError) {
    return async function (req, res, next) {
        let { user, password } = req.body
        const isValid = validator(user, password)
        const isAuthentic = await authenticator(user, password)
        if (isValid && isAuthentic) res.send(tokenGenerator())
        else res.status(403).send(authenticationError("Wrong username or password"))
    }
}
module.exports = authenticate