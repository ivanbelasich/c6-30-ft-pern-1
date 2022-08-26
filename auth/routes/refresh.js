let express = require('express');
let router = express.Router();
let sanitizer = require('../middleware/sanitizer')
let sanitizeRefresh = sanitizer(['refreshToken'])

router.post('/', sanitizeRefresh, handlePost);

module.exports = router;

