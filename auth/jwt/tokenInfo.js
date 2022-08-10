const tokenInfo = {
    accessTokenValidityDays: parseInt(process.env.ACCESS_TOKEN_VALIDITY_DAYS || '0'),
    refreshTokenValidityDays: parseInt(process.env.REFRESH_TOKEN_VALIDITY_DAYS || '0'),
    issuer: process.env.TOKEN_ISSUER || '',
    audience: process.env.TOKEN_AUDIENCE || '',
};

module.exports = tokenInfo