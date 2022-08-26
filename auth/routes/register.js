var express = require('express');
var sanitizer = require('../middleware/sanitizer');

var router = express.Router();
var sanitizeRegister = sanitizer(['user', 'password', 'access'])

var { handlePost } = require('../controllers/register')

router.post('/', sanitizeRegister, handlePost);

module.exports = router;

