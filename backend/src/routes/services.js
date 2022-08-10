const { Router } = require('express');

import { deleteServices, getService, getServices, getServicesCount, updateServices, saveServices, createServices } from '../controllers/services'

const router = Router();

router.get('/', getServices);
router.get('/count',getServicesCount);
router.post('/create', createServices);
router.get('/:id', getService);
// router.post('/services', saveServices);
router.delete('/:id', deleteServices);
router.put('/:id', updateServices);

module.exports = router;