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

module.exports = {
    getAllPlanets,
    addPlanet
}



