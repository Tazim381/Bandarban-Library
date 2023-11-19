const express = require('express')
const bookRouter = express.Router()
const Book = require('../../models/book')

bookRouter.post('/addBook',async(req,res)=>{
    const {bookName,authorName,publishedYear,category,bookLanguage,image,entryLanguage} = req.body
    if(!bookName || !authorName || !publishedYear || !category || !bookLanguage || !entryLanguage) {
        return res.status(400).json("Please provide all book information")
    }
    try{
        const bookObj = {
            bookName, 
            authorName,
            publishedYear,
            category,
            bookLanguage,
            image,
            entryLanguage
        }

        const book = new Book(bookObj)
        await book.save()
        return res.status(201).json(book)

    } catch(error) {
        console.log(error)
        return res.status(400).json("Book object is not created")
    }
})

module.exports = bookRouter