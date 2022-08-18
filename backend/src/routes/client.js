const { Router } = require('express');
const router = Router();
const Client = require('../sequelize/models/Client')
const sanitizer = require('../middleware/sanitizer');
const { clientCreator, clientFindUser, clientDeleteUser } = require('../controllers/client/index')
const jwtMiddleware = require('../middleware/jwt')
const sameUserTokenAndBody = require('../middleware/sameUserTokenAndBody')

let { id, createdAt, updatedAt, ...modelProps } = Client.getAttributes()
let modelKeys = Object.keys(modelProps)
let sanitizePost = sanitizer([...modelKeys, 'password'])
let sanitizeDelete = sanitizer(['user'])

router.get('/', clientFindUser)
router.post('/', sanitizePost, clientCreator)
router.delete('/',
    sanitizeDelete,
    jwtMiddleware,
    sameUserTokenAndBody,
    clientDeleteUser
)

module.exports = router;