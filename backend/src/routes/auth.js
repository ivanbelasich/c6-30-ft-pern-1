const { Router } = require('express');
const sanitizer = require('../middleware/sanitizer');
const { handleLogin } = require('../controllers/auth/index')
const router = Router();

router.use(sanitizer(['user', 'password']))
router.post('/login', handleLogin);

module.exports = router;