const mongoose = require('mongoose')

const Car = mongoose.model('cars', {
    make: String,
    model: String,
    year: Date,
    litresPer100km: Number,
});

module.exports = Car;