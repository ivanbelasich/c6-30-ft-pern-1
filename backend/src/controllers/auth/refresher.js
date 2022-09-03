const axios = require("axios").default

function refresher(url) {
    return async function (authorization, refreshToken) {
        try {
            let response = await axios({
                url,
                headers: {
                    authorization,
                    "Content-Type": "application/json"
                },
                method: "POST",
                data: { refreshToken }
            })
            let tokens = { ...response.data }
            return tokens
        } catch (error) {
            throw error
        }
    }
}

module.exports = refresher