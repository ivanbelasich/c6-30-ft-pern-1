let jwt = require('jsonwebtoken')
let jwtError = require('./jwtError')

let jwtMiddleware = (req, res, next) => {
    if (!req.headers.authorization) return res.status(400).send(jwtError("Missing authorization header"))
    let { authorization } = req.headers
    if (!authorization.startsWith('Bearer ')) return res.status(400).send(jwtError("Missing bearer authentication"))
    const token = authorization.split(' ')[1]
    try {
        const payload = jwt.verify(token, process.env.AUTH_TOKEN_SECRET)
        req.headers.payload = payload
        return next()
    }
    catch (error) {
        res.status(400).send(jwtError(error.message || "Invalid token"))
    }

}

module.exports = jwtMiddleware