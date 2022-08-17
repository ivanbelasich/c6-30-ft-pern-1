var express = require('express');
var router = express.Router();
var { handleUpdate } = require('./update/index');

router.put('/', handleUpdate);

module.exports = router;

