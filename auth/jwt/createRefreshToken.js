let tokenInfo = require('./tokenInfo')
let tokenSign = require('./tokenSign')
let tokenPayload = require('./tokenPayload')

function createRefreshToken(user) {
    let payload = tokenPayload(
        user,
        tokenInfo.issuer,
        tokenInfo.audience,
        tokenInfo.refreshTokenValidityDays
    )
    let token = tokenSign(payload)
    return token
}

module.exports = createRefreshToken
