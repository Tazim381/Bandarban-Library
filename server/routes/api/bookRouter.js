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

bookRouter.get("/allBooks",async(req,res)=>{
    try{
        const books = await Book.find()
        return res.status(200).json(books)
    } catch(error) {
        console.log(error)
        return res.status(400).json("Books not found")
    }

})

bookRouter.put('/updateBook/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const body = req.body
        const book = await Book.findByIdAndUpdate(id,body,{new:true})
        if(book) {
            return res.status(200).json(book)
        } else {
            return res.status(402).json("Book is not found")
        }

    } catch(error) {
        console.log(error)
        return res.status(500).json("Server Error")
    }
})


bookRouter.delete('/deleteBook/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const body = req.body
        const book = await Book.findByIdAndDelete(id,body,{new:true})
        if(book) {
            return res.status(200).json(book)
        } else {
            return res.status(402).json("Book is not found")
        }
    } catch(error) {
        console.log(error)
        return res.status(500).json("Server Error")
    }
})

bookRouter.get('/uniqueCategories', async (req, res) => {
    try {
      const uniqueCategories = await Book.distinct('category');
      return res.status(200).json(uniqueCategories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

bookRouter.get('/:id',async(req,res)=>{
    try{
      const id= req.params.id
      const book = await Book.findById(id)
      if(book) {
        return res.status(200).json(book)
      } else {
        return res.status(404).json("Book not found")
      }

    } catch(error) {
        return res.status(500).json("Server Error")
        console.log(error)
    }
})
bookRouter.post('/searchBooks', async (req, res) => {
    try {
        const { category, authorName, bookName } = req.body;

        // Define the aggregation pipeline based on your criteria
        const pipeline = [];

        // Match documents where either category, authorName, or bookName is present
        if (category || authorName || bookName) {
            const matchCondition = {};

            if (category) {
                matchCondition.category = category;
            }

            if (authorName) {
                
                matchCondition.authorName = authorName;
            }

            if (bookName) {
                // Remove extra spaces from the beginning, end, and between words for bookName
                const cleanedBookName = bookName.replace(/\s+/g, ' ').trim();
                matchCondition.bookName = { $regex: new RegExp(cleanedBookName, 'i') };
            }

            pipeline.push({
                $match: matchCondition
            });
        }

        if (pipeline.length > 0) {
            // Execute the aggregation
            const result = await Book.aggregate(pipeline);

            // Send the result as the response
            res.json(result);
        } else {
            // No criteria provided, return all books
            const allBooks = await Book.find();
            res.json(allBooks);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = bookRouter 