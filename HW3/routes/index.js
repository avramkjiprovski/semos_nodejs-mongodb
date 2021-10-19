const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('../swagger.json')
const {getAllPlanets, addPlanet, getPlanet} = require('../handlers/planets')


router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocs)) // setup go prima swagger.json kako argument

// according to api documentation
router.get('/planets', getAllPlanets) // get all planets
router.post('/planets', addPlanet) // add a new planet
router.get('/planets/:id', getPlanet) // get a selected planet through id


module.exports = router