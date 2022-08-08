"use strict";

var _require = require('express'),
    Router = _require.Router;

var orderRouter = require('./order');

var serviceRouter = require('./services');

var router = Router();
router.use('/order', orderRouter);
router.use('/service', serviceRouter);
module.exports = router;