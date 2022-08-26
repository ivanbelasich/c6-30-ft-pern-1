const TokenError = require('./TokenError')


async function getAccessToken(authorization) {
    try {
        if (!authorization) throw new TokenError(400, "Missing authorization header.")
        else if (!authorization.startsWith('Bearer ')) throw new TokenError(403, "Invalid authorization header.")
        else return authorization.split(' ')[1]
    } catch (error) {
        throw error
    }
}

module.exports = getAccessToken