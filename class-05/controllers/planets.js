const Planet = require('../models/Planet')

const handleGetAllPlanets = async (req, res, next) => {
    try {
        const planets = await Planet.find() // get all documents in collection!
        return res.status(200).json(planets)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const handleFindPlanetById = async (req, res, next) => {
    const id = req.params.id

    try{
        const foundPlanet = await Planet.findById(id)

        if(!foundPlanet){
            return res.status(400).json('Non-existant planet id!')
        }

        return res.status(200).json(foundPlanet)

    }catch(err){
        return res.status(500).json(err)
    }
}


const handleAddPlanet = async (req, res, next)=>{
    const body = req.body

    if(!body.name || !body.size || !body.distanceFromSun){
        return res.status(400).json('Invalid request')
    }

    try {
        await Planet.crete({
            name: body.name,
            size: body.size,
            distanceFromSun: body.distanceFromSun,
        })
        return res.status(201).json('Planet created.')
    } catch (error) {
        return res.status(500).json(error)
    }
}


const handleEditPlanet = async (req, res, next) => {
    const planetBody = req.body

    if(!planetBody.name || !planetBody.size || !planetBody.distanceFromSun){
        return res.status(400).json('Invalid request!')
    }

    try {
        await Planet.findByIdAndUpdate(planetBody.id, {
            name: planetBody.name,
            size: planetBody.size,
            distanceFromSun: planetBody.distanceFromSun
        })
        return res.status(200).json('Planet edited!')
    } catch (error) {
        return res.status(500).json(error)
    }
}

const handleDeletePlanet = async (req, res, next) => {
    const id = req.params.id
    try {
        await Planet.findByIdAndDelete(id)
        return res.status(200).json('Planet deleted!')
    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = {
    handleGetAllPlanets,
    handleFindPlanetById,
    handleAddPlanet,
    handleEditPlanet,
    handleDeletePlanet
}