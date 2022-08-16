const { Router } = require('express');

const orderRouter = require('./order')
const serviceRouter = require('./services')
const authRouter = require('./auth')

const router = Router();


router.use('/order', orderRouter);
router.use('/service', serviceRouter);
router.use('/auth', authRouter)



module.exports = router;
