const { Router } = require('express');
const { handleLogin, handleRefresh } = require('../controllers/auth/index')
const sanitizer = require('../middleware/sanitizer');
const sanitizeLogin = sanitizer(['user', 'password'])
const sanitizeRefresh = sanitizer(["refreshToken"])

const router = Router();

router.post('/login', sanitizeLogin, handleLogin);
router.post('/refresh', sanitizeRefresh, handleRefresh)

module.exports = router;