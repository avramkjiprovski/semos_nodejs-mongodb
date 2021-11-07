const Car = require('../core/Car');

const getAllCars = async (req, res) => {
    try {
        const allCars = await Car.find();
        return res.status(200).json(allCars);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getAllAggregatedCars = async (req, res) => {
    try {
        const allCars = await Car.aggregate()
            .lookup({
                from: 'mechanics',
                foreignField: 'ownCarId',
                localField: '_id',
                as: 'mechanic',
            })
            .match({
                litresPer100km:{
                    $lte: 4,
                },
            })
            .project({
                make: '$make',
                model: '$model',
                yearOfProduction: '$year',
                lp1k: '$litresPer100km',
                mechanic: '$mechanic',
            })
            return res.status(200).json(allCars);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addNewCar = async(req, res) => {
    const {make, model, year, litresPer100km} = req.body;

    if(!make || !model || !year || !litresPer100km){
        return res.status(400).json('Invalid request!')
    }

    try {
        const newCar = new Car({
            make,
            model,
            year, 
            litresPer100km
        });

        await newCar.save();
        return res.status(201).json('Car created!');
    } catch (error) {
        return res.status(500).json(error);
    }
};

const editCar = async(req, res) => {
    const {id} = req.params;
    const {make, model, year, litresPer100km} = req.body;

    if(!make || !model || !year || !litresPer100km) {
        return res.status(400).json('Invalid request!');
    }

    try {
        await Car.findByIdAndUpdate(id, {
            make,
            model,
            year,
            litresPer100km
        })
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCar = async (req, res) => {
    const {id} = req.params;

    try {
        await Car.findOneAndDelete(id);
        return res.status(200).json('Car was deleted!');
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {
    getAllCars,
    addNewCar,
    editCar,
    deleteCar,
    getAllAggregatedCars
};