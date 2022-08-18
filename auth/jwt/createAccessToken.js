let tokenInfo = require('./tokenInfo')
let tokenSign = require('./tokenSign')
let tokenPayload = require('./tokenPayload')

function createAccessToken(user, access) {
    let payload = tokenPayload(
        user,
        access,
        tokenInfo.issuer,
        tokenInfo.audience,
        tokenInfo.accessTokenValidityDays
    )
    let token = tokenSign(payload)
    return token
}

module.exports = createAccessToken
