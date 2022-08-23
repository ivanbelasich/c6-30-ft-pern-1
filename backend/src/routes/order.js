let { Router } = require('express');
let { createOrder } = require('../controllers/order');
let sanitizer = require('../middleware/sanitizer')
let sanitizePosts = sanitizer(["client", "serviceId", "date"])

// import { deleteOrders, getOrder, getOrders, getOrdersCount, updateOrders, saveOrders, createOrders } from '../controllers/orders'

const router = Router();

router.post('/', sanitizePosts, createOrder)
// router.get('/', getOrders);
// router.get('/count',getOrdersCount);
// router.post('/create/:id', createOrders);
// router.get('/:id', getOrder);
// // router.post('/orders', saveOrders);
// router.delete('/:id', deleteOrders);
// router.put('/:id', updateOrders);

module.exports = router;