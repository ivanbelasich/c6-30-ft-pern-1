function registerCreate(validator, creator, tokenGenerator, registerError) {
    return async function (req, res, next) {
        let { user, password } = req.body
        
        let isValid = await validator(user, password)
        if (!isValid) return res.status(400).send(registerError("Invalid username or password"))
    
        const result = await creator(user, password)
        if (!result) return res.status(403).send(registerError("There was a problem registering the user"))

        else res.send(tokenGenerator())
    }
}

module.exports = registerCreate