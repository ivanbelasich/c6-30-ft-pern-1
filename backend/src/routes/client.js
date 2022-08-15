const { Router } = require('express');
const sanitizer = require('../middleware/sanitizer');
const router = Router();
const { Client } = require('../db.js')
console.log(Client)

//New Client
router.post(sanitizer([
    'user',
    'password',

]))

module.exports = router;