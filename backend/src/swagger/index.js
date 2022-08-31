let swaggerUI = require('swagger-ui-express')
let yaml = require('yamljs')
let path = require('path')
let config = yaml.load(path.join(__dirname, 'swagger-config.yaml'))
let express = require('express')
let router = express.Router()
router.use('/', swaggerUI.serve, swaggerUI.setup(config))

module.exports = router