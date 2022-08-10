function getAccessToken(authorization) {
    if (!authorization) return tokenError("Authorization missing.")
    if (!authorization.startsWith('Bearer ')) return tokenError("Invalid authorization.")
    return { success: true, token: authorization.split(' ')[1] }
}

module.exports = getAccessToken