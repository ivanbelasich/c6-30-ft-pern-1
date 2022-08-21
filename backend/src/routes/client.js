const { Router } = require('express');
const router = Router();
const Client = require('../sequelize/models/Client')
const sanitizer = require('../middleware/sanitizer');
const { clientCreator, clientFindUser, clientDeleteUser } = require('../controllers/client/index')
const jwtMiddleware = require('../middleware/jwt')
const sameUserTokenAndBody = require('../middleware/sameUserTokenAndBody')

let { id, createdAt, updatedAt, ...modelProps } = Client.getAttributes()
let modelKeys = Object.keys(modelProps)

let sanitizePost = sanitizer(['user', 'password', 'email'])
let sanitizeDelete = sanitizer(['user'])
let sanitizePut = sanitizer([...modelKeys])

router.get('/', clientFindUser)
router.post('/', sanitizePost, clientCreator)
router.delete('/',
    sanitizeDelete,
    jwtMiddleware,
    sameUserTokenAndBody,
    clientDeleteUser
)

module.exports = router;