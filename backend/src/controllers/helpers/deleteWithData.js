const axios = require('axios').default

function deleteWithData(url) {
    return function (data) {
        return axios({
            url,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
    }
}
module.exports = deleteWithData