const { Router } = require('express');
const router = Router();
const Provider = require('../sequelize/models/Provider')
const sanitizer = require('../middleware/sanitizer');
const jwtMiddleware = require('../middleware/jwt')
const sameUserTokenAndBody = require('../middleware/sameUserTokenAndBody')
const { providerFindUser, providerFindUsers, providerCreateUser, providerDeleteUser, providerUpdateUser } = require('../controllers/provider');

let { id, createdAt, updatedAt, ...modelProps } = Provider.getAttributes()
let modelKeys = Object.keys(modelProps)

let sanitizePost = sanitizer(['user', 'password', 'email'])
let sanitizeDelete = sanitizer(['user'])
let sanitizePut = sanitizer([...modelKeys])

router.get('/:user', providerFindUser)
router.get('/', providerFindUsers)
router.post('/', sanitizePost, providerCreateUser)
router.delete('/',
    sanitizeDelete,
    jwtMiddleware,
    sameUserTokenAndBody,
    providerDeleteUser
)
router.put('/', sanitizePut,
    jwtMiddleware,
    sameUserTokenAndBody,
    providerUpdateUser
)


module.exports = router;