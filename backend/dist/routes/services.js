"use strict";

var _services = require("../controllers/services");

var _require = require('express'),
    Router = _require.Router;

var router = Router();
router.get('/', _services.getServices);
router.get('/count', _services.getServicesCount);
router.get('/:id', _services.getService); // router.post('/services', saveServices);

router["delete"]('/:id', _services.deleteServices);
router.put('/:id', _services.updateServices);
module.exports = router;