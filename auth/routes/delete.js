var express = require('express');
var router = express.Router();
var sanitizer = require('../middleware/sanitizer')

var sanitizeDelete = sanitizer(['user'])
var { handleDelete } = require('../controllers/delete/index');

router.delete('/', sanitizeDelete, handleDelete);

module.exports = router;

