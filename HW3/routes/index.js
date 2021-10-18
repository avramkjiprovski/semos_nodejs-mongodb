const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('../swagger.json')
const {getAllPlanets, addPlanet} = require('../handlers/planets')


router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocs)) // setup go prima swagger.json kako argument

// according to api documentation
router.get('/planets', getAllPlanets) // get all planets
router.post('/planets', addPlanet) // add a new planet
// router.put('/planets/:id', editPlanet) // edit a selected planet

module.exports = router