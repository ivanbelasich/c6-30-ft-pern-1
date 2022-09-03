const { Router } = require('express');
const { createService, deleteService, getOneService, getAllServices } = require('../controllers/services/index')
const router = Router();

router.get('/:id', getOneService);
router.get('/', getAllServices)
router.post('/', createService);
router.delete('/', deleteService);

module.exports = router;