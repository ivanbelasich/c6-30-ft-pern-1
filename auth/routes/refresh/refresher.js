function refresher(accessor, decoder, validator, userExists, tokenError, tokenCreator) {
    return async function (req, res, next) {
        let accessorResult = accessor(req.headers.authorization)
        if (!accessorResult.success) return res.send(400).send(accessorResult)

        let accessTokenPayload = decoder(accessorResult.token)
        let isValidAccessToken = validator(accessTokenPayload)
        if (!isValidAccessToken) return res.status(400).send(tokenError("Invalid access token"))
        
        let response = await userExists(accessTokenPayload.user)
        if (!response.success) return res.status(500).send(tokenError("There was a problem querying the database."))
        
        let {user, access} = response.payload
        if (!user) return res.status(400).send(tokenError("User not registered."))

        let refreshTokenPayload = decoder(req.body.refreshToken)
        let isValidRefreshToken = validator(refreshTokenPayload)
        if (!isValidRefreshToken) return res.status(400).send(tokenError("Invalid refresh token"))

        let tokens = tokenCreator(user, access)
        return res.send(tokens)
    }
}
module.exports = refresher