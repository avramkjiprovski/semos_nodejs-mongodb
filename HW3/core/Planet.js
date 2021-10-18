let planets = [
    {
        id: 1,
        name: 'Mercury'
    },
    {
        id: 2,
        name: 'Venus'
    },
    {
        id: 3,
        name: 'Earth'
    },
    {
        id: 4,
        name: 'Mars'
    },
    {
        id: 5,
        name: 'Jupiter'
    },
    {
        id: 6,
        name: 'Saturn'
    },
    {
        id: 7,
        name: 'Uranus'
    },
    {
        id: 8,
        name: 'Neptune'
    },
    
]


const getAllPlanets = () => {
    return planets
}

const checkDuplicates = (planets, planet) => {
    let duplicate = false
    planets.map(item => {
        if(item.name === planet.name && item.id === planet.id){
            duplicate = true
            return
        }
    })

    return duplicate
}

/**
 * This function will accept a new json object and it will check for formatting or duplicates. 
 * If all is well it will add it to our db, otherwise it will return status code error
 * @param {object} planet 
 * @returns {object || number}
 * 
 */
const addPlanet = (planet) => {
    let returnStatus
    if(!planet.hasOwnProperty('id') || !planet.hasOwnProperty('name')){
        returnStatus = 400       
    }else if(checkDuplicates(planets, planet)){
        returnStatus = 409
    }else{
        planets.push(planet)
        returnStatus = planet
    }

    return returnStatus

}

module.exports = {
    getAllPlanets,
    addPlanet
}