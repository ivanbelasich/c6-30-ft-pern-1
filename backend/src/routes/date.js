const { Router } = require('express');

import { deleteDates, getDate, getDates, getDatesCount, updateDates, saveDates, createDates } from '../controllers/dates'

const router = Router();

router.get('/', getDates);
router.get('/count', getDatesCount);

router.get('/:id', getDate);

router.put('/:id', updateDates);

module.exports = router;