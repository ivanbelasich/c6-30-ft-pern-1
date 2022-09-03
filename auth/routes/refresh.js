let express = require('express');
let router = express.Router();
let sanitizer = require('../middleware/sanitizer')
let sanitizeRefresh = sanitizer(['refreshToken'])
let { handlePost } = require('../controllers/refresh')

router.post('/', sanitizeRefresh, handlePost);

module.exports = router;

