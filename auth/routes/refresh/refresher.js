function refresher(accessor, decoder, validator, userExists, tokenError, tokenCreator) {
    return async function (req, res, next) {
        try {
            let accessorResult = accessor(req.headers.authorization)
            if (!accessorResult.success) return res.status(400).send(accessorResult)

            let accessTokenPayload = decoder(accessorResult.token)
            let isValidAccessToken = validator(accessTokenPayload)
            if (!isValidAccessToken) return res.status(400).send(tokenError("Invalid access token"))

            let { success, payload } = await userExists(accessTokenPayload.user)

            if (!success) return res.status(500).send(tokenError("There was a problem querying the database."))
            if (!payload) return res.status(400).send(tokenError("Invalid user."))

            let { user, access } = payload
            let refreshTokenPayload = decoder(req.body.refreshToken)
            let isValidRefreshToken = validator(refreshTokenPayload)
            if (!isValidRefreshToken) return res.status(400).send(tokenError("Invalid refresh token"))

            let tokens = tokenCreator(user, access)
            return res.send(tokens)
        }
        catch (error) {
            next(error)
        }

    }
}
module.exports = refresher