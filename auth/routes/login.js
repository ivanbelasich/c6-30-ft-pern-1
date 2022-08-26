var express = require('express');
var router = express.Router();

var sanitizer = require('../middleware/sanitizer');
var sanitizeLogin = sanitizer(["user", "password"])

var { handlePostLogin } = require('../controllers/login')

router.post('/', sanitizeLogin, handlePostLogin);

module.exports = router;
