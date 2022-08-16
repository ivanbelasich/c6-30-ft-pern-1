const { Router } = require('express');
const sanitizer = require('../middleware/sanitizer');
const { authLoginHandler } = require('../controllers/auth/index')
const router = Router();

const authFetcher = require('../controllers/auth/authFetcher')
const authErrorManager = require('../controllers/auth/authErrorManager')
const handleLogin = authLoginHandler(authFetcher, authErrorManager)

router.use(sanitizer(['user', 'password']))
router.post('/login', handleLogin);

module.exports = router;