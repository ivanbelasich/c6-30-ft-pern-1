function registerCreate(creator, tokenGenerator, registerError) {
    return async function (req, res, next) {
        let { user, password, access } = req.body
        const result = await creator(user, password, access)
        if (!result) res.status(403).send(registerError("There was a problem registering the user"))
        else if (!result.success) res.status(400).send(registerError(result.message))
        else res.send(tokenGenerator(user, access))
    }
}

module.exports = registerCreate