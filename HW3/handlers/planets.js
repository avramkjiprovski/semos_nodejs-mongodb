const Planet = require('../core/Planet');

const getAllPlanets = async (req, res, next) => {
    try{
        const allPlanets = await Planet.getAllPlanets()
        return res.status(200).json(allPlanets)
    }catch(err){
        return res.status(500).json(err)
    }
}

const addPlanet = async (req, res, next) => {
    try{
        // console.log(req.body)
        const response = await Planet.addPlanet(req.body)
        if(response == 409 || response == 400){
            res.status(response).json(`Error with status code ${response}`)
        }else{
            res.status(201).json(response)
        }
    }catch(err){
        console.log(err)
    }
}

const getPlanet = async (req, res, next) => {
    try{
        const planet = await Planet.getPlanet(req.params.id)
        if(planet === 500) res.status(500).json("Internal error!")
        res.status(200).json(planet)
    }catch(err){
        console.log(err)
    }
}

const editPlanet = async (req, res, next) => {
    try {
        let returnVal = await Planet.editPlanet(req)
        if(!req.body.id || !req.body.name) res.status(400).json("Bad Request, missing info!")
        else if(returnVal != 500) res.status(200).json(returnVal)

        res.status(500).json("You failed us")
    }catch(err){
        console.log(err)
    }
}


const deletePlanet = async (req, res, next) => {
    try {
        if(!req.params.id) res.status(400).json("Missing ID!")
        else if(Planet.deletePlanet(req.params.id)) res.status(200).json(`Element with id ${req.params.id} deleted successfully!`)
        else res.status(500).json("Element does not exist!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllPlanets,
    addPlanet,
    getPlanet,
    editPlanet,
    deletePlanet
}



