const tokenInfo = {
    accessTokenValidityDays: parseInt(process.env.AUTH_ACCESS_TOKEN_VALIDITY_DAYS || '0'),
    refreshTokenValidityDays: parseInt(process.env.AUTH_REFRESH_TOKEN_VALIDITY_DAYS || '0'),
    issuer: process.env.AUTH_TOKEN_ISSUER || '',
    audience: process.env.AUTH_TOKEN_AUDIENCE || '',
};

module.exports = tokenInfo