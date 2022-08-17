const { Router } = require('express');
const router = Router();
const Provider = require('../sequelize/models/Provider')
const sanitizer = require('../middleware/sanitizer');

const { providerFindUser, providerCreateUser, providerDeleteUser } = require('../controllers/provider');

let { id, createdAt, updatedAt, ...modelProps } = Provider.getAttributes()
let modelKeys = Object.keys(modelProps)

let sanitizePost = sanitizer([...modelKeys, 'password'])
let sanitizeDelete = sanitizer(['user'])

router.get('/', providerFindUser)
router.post('/', sanitizePost, providerCreateUser)
router.delete('/', sanitizeDelete, providerDeleteUser)

module.exports = router;