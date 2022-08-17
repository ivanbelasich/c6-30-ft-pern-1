var express = require('express');
var router = express.Router();
var { handleDelete } = require('./delete/index');

router.delete('/', handleDelete);

module.exports = router;

