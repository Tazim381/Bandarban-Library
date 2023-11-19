const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique:true,
    },
    authorName: {
        type: String,
        required: true,
    },
    publishedYear: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    bookLanguage: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    entryLanguage: {
        type: String,
        enum: ['bangla', 'english'],
        required: true,
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
