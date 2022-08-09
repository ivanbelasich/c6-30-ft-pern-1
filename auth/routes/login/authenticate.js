function authenticate(validator, authenticator, tokenGenerator, authenticationError) {
    return async function (req, res, next) {
        let { user, password } = req.body

        const isValid = validator(user, password)
        if (!isValid) return res.status(400).send(authenticationError("Invalid username or password"))

        const isAuthentic = await authenticator(user, password)
        if (!isAuthentic) return res.status(403).send(authenticationError("Wrong username or password"))
    
        else res.send(tokenGenerator())
    }
}
module.exports = authenticate