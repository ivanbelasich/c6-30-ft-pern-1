const { Router } = require('express');

const orderRouter = require('./order')
const serviceRouter = require('./services')


const router = Router();


router.use('/order', orderRouter);
router.use('/service', serviceRouter);



module.exports = router;
