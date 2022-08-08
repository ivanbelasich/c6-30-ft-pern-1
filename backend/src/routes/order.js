const { Router } = require('express');

import { deleteOrders, getOrder, getOrders, getOrdersCount, updateOrders, saveOrders } from '../controllers/orders'

const router = Router();

router.get('/', getOrders);
router.get('/count',getOrdersCount);
router.get('/:id', getOrder);
// router.post('/orders', saveOrders);
router.delete('/:id', deleteOrders);
router.put('/:id', updateOrders);

module.exports = router;