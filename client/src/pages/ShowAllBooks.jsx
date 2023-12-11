import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchBook from '../components/SearchBook';
import ShowBookByCategory from '../components/ShowBookByCategory';

const ShowAllBooks = () => {
  const [books, setBooks] = useState([])
  const [searchStatus, setSearchStatus] = useState(false)
  const [categories, setCategories] = useState([])
  const [selectedBooksCategory, setSelectedBooksCategory] = useState([])
  const [bookName, setBookName] = useState('')
  const [seletedBooks,setSelectedBooks] = useState([])
  const [authors,setAuthorName] = useState([])
  const [selectedAuthorName,setSelectedAuthorName] = useState('')


  const handleSearch=()=>{
    axios.post(`http://localhost:5000/api/book/searchBooks`, {
    category:selectedBooksCategory,
    authorName:selectedAuthorName,
    bookName:bookName
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

  useEffect(() => {
    fetch('http://localhost:5000/api/book/allBooks')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, [books]);

  useEffect(() => {
    fetch('http://localhost:5000/api/book/uniqueCategories')
      .then(response => response.json())
      .then(data => {
        setCategories(data.uniqueBookCategories)
        setAuthorName(data.uniqueBookAuthors)
      })
  }, [])

  return (
    <div className='mb-10'>
      <div className='flex items-center justify-center mt-24'>

        <div className='flex gap-10 relative w-5/6'>
          <select className='h-10 border border-teal-400 rounded-md pl-5 focus:outline-none'
            onChange={(e) => setSelectedBooksCategory(e.target.value)}>
            <option value={''}>All Categories</option>
            {
              categories.map((category) => (
                <option value={category}>{category}</option>
              ))
            }
          </select>
          <select className='border border-teal-400 rounded-md pl-5 focus:outline-none'
            onChange={(e) => setSelectedAuthorName(e.target.value)}>
            <option value={''}>All Writers</option>
            {
              authors.map((author) => (
                <option value={author}>{author}</option>
              ))
            }
          </select>
          <input
            className='w-full h-10 pl-5 pr-12 border border-teal-400 rounded-md focus:outline-none'
            placeholder='Enter Book Name'
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
          <div className='border border-teal-400 rounded-md pl-5 pr-5 flex items-center focus:outline-none'>
            <button onClick={handleSearch}>Search</button>
          </div>

        </div>
      </div>
      {seletedBooks.length > 0 ? (
        <BookList books={seletedBooks} />
      ) : (
        <div className="text-center mt-4">
          {
            searchStatus &&<p>No results found. Showing all books.</p>
          }
          <BookList books={books} />
        </div>
      )}
    </div>
  );
};

export default ShowAllBooks;
