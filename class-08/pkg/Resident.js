const mongoose = require('mongoose')

const Resident = mongoose.model('residents', {
    name: {
        type: String,
        index: true,
        required: true
    },
    street: {
        type: String
    },
    age: {
        type: Number
    }
})


module.exports = Resident