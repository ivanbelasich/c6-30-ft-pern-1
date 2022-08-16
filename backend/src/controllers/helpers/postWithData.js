const axios = require('axios').default

function postWithData(url, data) {
    return axios({
        url,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data
    })

}
module.exports = postWithData