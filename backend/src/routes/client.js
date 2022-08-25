const { Router } = require('express');
const router = Router();
const Client = require('../sequelize/models/Client')
const sanitizer = require('../middleware/sanitizer');
const jwtMiddleware = require('../middleware/jwt')
const sameUserTokenAndBody = require('../middleware/sameUserTokenAndBody')
const { clientCreator, clientFindUser, clientFindUsers, clientDeleteUser, clientUpdateUser } = require('../controllers/client/index')

let { id, createdAt, updatedAt, ...modelProps } = Client.getAttributes()
let modelKeys = Object.keys(modelProps)

let sanitizePost = sanitizer(['user', 'password', 'email'])
let sanitizeDelete = sanitizer(['user'])
let sanitizePut = sanitizer([...modelKeys])

router.get('/:user', clientFindUser)
router.get('/', clientFindUsers)
router.post('/', sanitizePost, clientCreator)
router.delete('/',
    sanitizeDelete,
    jwtMiddleware,
    sameUserTokenAndBody,
    clientDeleteUser
)
router.put('/',
    sanitizePut,
    jwtMiddleware,
    sameUserTokenAndBody,
    clientUpdateUser
)

module.exports = router;