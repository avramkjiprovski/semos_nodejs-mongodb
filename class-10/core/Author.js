const mongoose = require('mongoose');

const Author = mongoose.mondel('authors', {
    name: String,
    dateOfBirth: Date,
    isAlive: Boolean
});

module.exports = Author;