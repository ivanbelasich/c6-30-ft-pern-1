let { Router } = require('express');
let { getOrder, createOrder, deleteOrder, updateOrder } = require('../controllers/order');
let sanitizer = require('../middleware/sanitizer')
let sanitizePosts = sanitizer(["client", "serviceId", "date"])
let sanitizeDelete = sanitizer(["id"])
let sanitizePut = sanitizer(['id', 'status'])


const router = Router();
router.get('/:id', getOrder)
router.post('/', sanitizePosts, createOrder)
router.delete('/', sanitizeDelete, deleteOrder)
router.put('/', sanitizePut, updateOrder)

module.exports = router;