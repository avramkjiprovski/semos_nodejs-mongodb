const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('../homework.json')

const{
    handeAddPlanet,
    handleDeletePlanet,
    handleEditPlanet,
    handleFindPlanetById,
    handleGetAllPlanets,
} = require('../controllers/planets')

const PREFIX = process.env.API_PREFIX
const basePlanetsUrl = `${PREFIX}/planets`

router.use(`${PREFIX}/api-docs`, swaggerUi.serve)
router.get(`${PREFIX}/api-docs`, swaggerUi.setup(swaggerDocs))

router.route(basePlanetUrl).get(handleGetAllPlanets).post(handleAddPlanet)
router
    .route(`${basePlanetsUrl}/:id`)
    .get(handleFindPlanetById)
    .put(handleEditPlanet)
    .delete(handleDeletePlanet)

router.use('*', (req, res, next) => {
    return res.status(404).json('Not Found.')
})


module.exports = router;