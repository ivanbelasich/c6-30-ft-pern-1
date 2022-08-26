let TokenError = require('./TokenError')
function refresher(accessor, decoder, validator, userExists, tokenCreator, payloadResponse) {
    return async function (req, res, next) {
        try {
            let accessToken = await accessor(req.headers.authorization)

            let accessTokenPayload = decoder(accessToken)
            let isValidAccessToken = validator(accessTokenPayload)
            if (!isValidAccessToken) throw new TokenError(403, "Invalid access token")

            let { user, access } = await userExists(accessTokenPayload.user)

            let refreshTokenPayload = decoder(req.body.refreshToken)
            let isValidRefreshToken = validator(refreshTokenPayload)
            if (!isValidRefreshToken) throw new TokenError(403, "Invalid refresh token")

            let tokens = tokenCreator(user, access)
            return res.send(payloadResponse({ user, access, tokens }))
        }
        catch (error) {
            next(error)
        }

    }
}
module.exports = refresher