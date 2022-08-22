const { Router } = require('express');
const { createService, deleteService } = require('../controllers/services/index')
// import { deleteServices, getService, getServices, getServicesCount, updateServices, saveServices, createServices } from '../controllers/services'

const router = Router();

// router.get('/', getServices);
// router.get('/count',getServicesCount);
router.post('/', createService);
// router.get('/:id', getService);
// router.post('/services', saveServices);
router.delete('/', deleteService);
// router.put('/:id', updateServices);

module.exports = router;