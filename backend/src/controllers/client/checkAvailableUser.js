let axios = require('axios').default
let postWithData = require('../helpers/postWithData')

async function checkAvailableUser(url, user) {
    try {
        let { data } = await postWithData(url, { user })
        if (data.success) return true
        else return false
    } catch (error) {
        throw error
    }
}

module.exports = checkAvailableUser