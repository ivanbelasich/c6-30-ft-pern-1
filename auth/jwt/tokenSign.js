const jwt = require('jsonwebtoken')

function tokenSign(tokenPayload) {
    return jwt.sign({ ...tokenPayload }, process.env.AUTH_TOKEN_SECRET)
}

module.exports = tokenSign