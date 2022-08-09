const generatePassword = require("./generatePassword");
function generateUsers(amount) {
    let users = Array(amount).fill("").map((k, index) => {
        let { password, salt } = generatePassword(`secret`)
        return {
            user: `Someone${index}`,
            password,
            salt,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    })
    return users
}
module.exports = generateUsers
