const router = require('express').Router()
const {
    getAllCars,
    addNewCar,
    editCar,
    deleteCar,
    getAllAggregatedCars
} = require('../handlers/cars')
const upload = require('../config/upload')

const {PREFIX} = process.env

router.get(`${PREFIX}/aggregate`, getAllAggregatedCars)
router.post(`${PREFIX}/upload`, upload.single, (req, res) => {})
router.route(`${PREFIX}/cars`)
    .get(getAllCars)
    .post(addNewcar)
router.route(`${PREFIX}/cars/:id`)
    .put(editCar)
    .delete(deleteCar)

router.use('*', (req, res) => res.status(404).json('Not Found!'))

module.exports = router