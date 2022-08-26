var express = require('express');
var router = express.Router();

var sanitizer = require('../middleware/sanitizer')
var sanitizeAvailable = sanitizer(['user'])

var { handlePost } = require('../controllers/available')

router.post('/', sanitizeAvailable, handlePost);

module.exports = router;

