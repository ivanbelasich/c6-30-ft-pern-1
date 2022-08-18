let postWithData = require('../helpers/postWithData')

function checkAvailableUser(url) {
    return async function (user) {
        try {
            let { data } = await postWithData(url)({ user })
            if (data.success) return true
            else return false
        } catch (error) {
            throw error
        }
    }

}

module.exports = checkAvailableUser