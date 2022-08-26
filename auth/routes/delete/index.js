let deleter = require("./deleter");
let userDeleter = require("./userDelete");
let successResponse = require('../../utils/successResponse')

let handleDelete = deleter(userDeleter, successResponse)

module.exports = { handleDelete }