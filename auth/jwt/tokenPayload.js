function tokenPayload(user, issuer, audience, expirationDays) {
    return {
        user,
        iss: issuer,
        aud: audience,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * expirationDays )
    }
}

module.exports = tokenPayload