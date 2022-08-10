let jwt = require('jsonwebtoken')

function tokenDecode(token) {
    return jwt.decode(token)
}

module.exports = tokenDecode