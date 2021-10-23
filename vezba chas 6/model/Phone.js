const mongoose = require('mongoose')



const Phone = mongoose.model("phones", {
    brand: String,
    os: String,
    model: String,
    screenSize: Number,
    yearOfRelease: Date
})


module.exports = Phone