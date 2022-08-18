let tokenInfo = require('./tokenInfo')
let tokenSign = require('./tokenSign')
let tokenPayload = require('./tokenPayload')

function createRefreshToken(user, access) {
    let payload = tokenPayload(
        user,
        access,
        tokenInfo.issuer,
        tokenInfo.audience,
        tokenInfo.refreshTokenValidityDays
    )
    let token = tokenSign(payload)
    return token
}

module.exports = createRefreshToken
