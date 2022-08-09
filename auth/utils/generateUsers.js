const generatePassword = require("./generatePassword");
function generateUsers(amount) {
    let users = Array(amount).fill("").map(k => {
        let { password, salt } = generatePassword(k)
        return {
            user: password.slice(0, 16),
            password,
            salt,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    })
    return users
}
module.exports = generateUsers
