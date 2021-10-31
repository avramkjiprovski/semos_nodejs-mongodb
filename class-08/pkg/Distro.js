const e = require('express');
const mongoose = require('mongoose')

const Distro = mongoose.model('distros', {
    packageManager: {
        type: String,
        index: true,
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    isUnstable: {
        type: Boolean,
        required: true
    },
    difficultyLevel: {
        type: String,
        required: true
    }
})


module.exports = Distro