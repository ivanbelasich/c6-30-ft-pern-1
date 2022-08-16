const { Router } = require('express');
const router = Router();
const Client = require('../sequelize/models/Client')
const sanitizer = require('../middleware/sanitizer');
const clientCreator = require('../controllers/client/clientCreator')

let {id, createdAt, updatedAt, ...modelProps} = Client.getAttributes()
let modelKeys = Object.keys(modelProps)
let sanitizePost = sanitizer([...modelKeys, 'password'])

router.post('/', sanitizePost, clientCreator)


//New Client


module.exports = router;