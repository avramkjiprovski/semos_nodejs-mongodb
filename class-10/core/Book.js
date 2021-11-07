const mongoose = require('mongoose');

const Book = mongoose.model('books', {
    title: String,
    genre: String,
    releaseYear: Date,
    writtenBy: mongoose.Types.ObjectId
})

module.exports = Book;