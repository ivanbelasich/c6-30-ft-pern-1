var express = require('express');
var router = express.Router();
var loginRouter = require('./login')
var registerRouter = require('./register')
var refreshRouter = require('./refresh')
var availableRouter = require('./available')
var deleteRouter = require('./delete')

router.use('/login', loginRouter);
router.use('/register', registerRouter)
router.use('/refresh', refreshRouter)
router.use('/available', availableRouter)
router.use('/delete', deleteRouter)

module.exports = router;
