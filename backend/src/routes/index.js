const { Router } = require('express');

const orderRouter = require('./order')
const serviceRouter = require('./services')
const authRouter = require('./auth')
const clientRouter = require('./client')
const router = Router();


router.use('/order', orderRouter);
router.use('/service', serviceRouter);
router.use('/auth', authRouter)
router.use('/client', clientRouter)



module.exports = router;
