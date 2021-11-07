const Book = require('../../core/book');

const getAllBooks = async (req, res) => {
  try {
      const allBooks = await Book.aggregate().lookup({
        from: 'authors',
        foreignField: '_id',
        localField: 'writtenBy',
        as: 'authorDetails'
      });

      return res.status(200).json(allBooks);
  } catch (error) {
      return res.status(500).json(error);
  }
};

const addNewBook = async (req, res) => {
    const {title, genre, releaseYear, writtenBy} = req.body;

    if(!title || !genre || !releaseYear || !writtenBy) {
        return res.status(400).json('Invalid request!');
    }

    try {
        const newBook = new Book({
            title,
            genre,
            releaseYear,
            writtenBy
        });

        await newBook.save();
        return res.status(201).json('Book added!');

    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    getAllBooks,
    addNewBook
}