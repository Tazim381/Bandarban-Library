import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';

const ShowAllBooks = () => {
  const [books, setBooks] = useState([])
  const [searchStatus, setSearchStatus] = useState(false)
  const [categories, setCategories] = useState([])
  const [selectedBooksCategory, setSelectedBooksCategory] = useState([])
  const [bookName, setBookName] = useState('')
  const [seletedBooks, setSelectedBooks] = useState([])
  const [authors, setAuthorName] = useState([])
  const [selectedAuthorName, setSelectedAuthorName] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalBooks, setTotalBooks] = useState(0);

  const handleSearch = () => {
    axios.post(`http://localhost:5000/api/book/searchBooks`, {
      category: selectedBooksCategory,
      authorName: selectedAuthorName,
      bookName: bookName
    })
      .then((response) => {
        console.log(response.data);
        setSelectedBooks(response.data)

      })
      .catch((error) => {
        console.log(error);
      });
    setSearchStatus(true)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/book/uniqueCategories')
      .then(response => response.json())
      .then(data => {
        setCategories(data.uniqueBookCategories)
        setAuthorName(data.uniqueBookAuthors)
        setTotalBooks(data.totalBooks)
      })
  }, [])

  const numOfBooks = totalBooks;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(numOfBooks / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch(`http://localhost:5000/api/book/allBooks?page=${currentPage}&limit=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, [books]);



  return (
    <div className='mb-10'>
      <div className='flex items-center justify-center mt-24'>
        <div className='lg:flex gap-10 relative w-5/6'>
          <select className='h-10 border border-teal-400 rounded-md pl-5 focus:outline-none'
            onChange={(e) => setSelectedBooksCategory(e.target.value)}>
            <option value={''}>All Categories</option>
            {
              categories.map((category) => (
                <option value={category}>{category}</option>
              ))
            }
          </select>
          <select className='border border-teal-400 rounded-md pl-5 focus:outline-none mt-5 lg:mt-0'
            onChange={(e) => setSelectedAuthorName(e.target.value)}>
            <option value={''}>All Writers</option>
            {
              authors.map((author) => (
                <option value={author}>{author}</option>
              ))
            }
          </select>
          <input
            className='w-full h-10 pl-5 pr-12 border border-teal-400 rounded-md focus:outline-none mt-5 lg:mt-0'
            placeholder='Search Your Book'
            value={bookName}
            onKeyPress={handleKeyPress}
            onChange={(e) => setBookName(e.target.value)}
          />
          <div className='border border-teal-400 rounded-md pl-5 mt-5 cursor-pointer lg:mt-0 pr-5 flex items-center focus:outline-none hover:bg-teal-700 hover:text-white transition duration-300 ease-in-out'>
            <button onClick={handleSearch} >Search</button>
          </div>
        </div>
      </div>
      {seletedBooks.length > 0 ? (
        <BookList books={seletedBooks} />
      ) : (
        <div className="text-center mt-4">
          {
            searchStatus && <p>No results found. Showing all books.</p>
          }
          <BookList books={books} />
        </div>
      )}
      <div className='mt-10 flex justify-center'>
        <div>
          <button onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)} className='px-4 py-2 bg-slate-400 text-white hover:bg-teal-700 hover:text-white transition duration-300 ease-in-out'>Previous</button>
          <button className='bg-gray-800 text-white px-4 py-2'>{currentPage}</button>
          <button onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage)} className='px-4 py-2 bg-slate-400 text-white hover:bg-teal-700 hover:text-white transition duration-300 ease-in-out'>Next</button>
        </div>

      </div>
      <div className='mt-5 flex justify-center'>
        <p className='font-bold text-2xl text-teal-700'>Total Pages = {totalPages}</p>
      </div>
    </div>
  );
};

export default ShowAllBooks;
