const Resident = require('../pkg/Resident')

const bulkInsertResidents = async (req, res, next) => {
    const { residents } = req.body

    if(!residents || residents.length === 0){
        return res.status(400).json('Residents are required!')
    }

    try {
        await Resident.insertMany(residents)
        return res.status(201).json('Added residents!')
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getResidents = async(req, res, next) => {
    const query = req.query

    try {
        if(!query.upperLimit){
            const allResidents = await Resident.find()
            return res.status(200).json(allResidents)
        }else if(query.upperLimit){
            const upperLimit = await Resident.find()
                .where('age')
                .lte(+query.upperLimit)
            return res.status(200).json(upperLimit)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


module.exports = {
    bulkInsertResidents,
    getResidents
}