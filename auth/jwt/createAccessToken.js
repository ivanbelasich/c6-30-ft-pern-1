let tokenInfo = require('./tokenInfo')
let tokenSign = require('./tokenSign')
let tokenPayload = require('./tokenPayload')

function createAccessToken(user) {
    let payload = tokenPayload(
        user,
        tokenInfo.issuer,
        tokenInfo.audience,
        tokenInfo.accessTokenValidityDays
    )
    let token = tokenSign(payload)
    return token
}

module.exports = createAccessToken
