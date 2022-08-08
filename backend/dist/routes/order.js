"use strict";

var _orders = require("../controllers/orders");

var _require = require('express'),
    Router = _require.Router;

var router = Router();
router.get('/', _orders.getOrders);
router.get('/count', _orders.getOrdersCount);
router.get('/:id', _orders.getOrder); // router.post('/orders', saveOrders);

router["delete"]('/:id', _orders.deleteOrders);
router.put('/:id', _orders.updateOrders);
module.exports = router;