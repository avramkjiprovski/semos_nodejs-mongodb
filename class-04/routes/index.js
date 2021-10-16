const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const { getAllWriters } = require('../handlers/writers')
const swaggerDocs = require('../swagger.json')

router.get(`${process.env.PREFIX}/writers`, getAllWriters) // localhost:8080/api/v1/writers
router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocs))
router.get(process.env.PREFIX + '/writers/:petko')

module.exports = router