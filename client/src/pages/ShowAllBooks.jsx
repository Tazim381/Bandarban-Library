import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchBook from '../components/SearchBook';
import ShowBookByCategory from '../components/ShowBookByCategory';

const ShowAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedBooks, setSelectedBooks] = useState([])
  const [bookName, setBookName] = useState('bookName')
  const [selectedSearchCategory,setSelectedSearchCategory] = useState('bookName')

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
      .then(data => setCategories(data))
  }, [categories])

  return (
    <div className='mb-10'>
      <div className='flex items-center justify-center mt-24'>

        <div className='flex gap-10 relative w-5/6'>
          <select className='h-10 border border-teal-400 rounded-md pl-5 focus:outline-none'
            onChange={(e) => setSelectedBooks(e.target.value)}>
            <option value={''}>ALL</option>
            {
              categories.map((category) => (
                <option value={category}>{category}</option>
              ))
            }
          </select>
          <select className='border border-teal-400 rounded-md pl-5 focus:outline-none'
            onChange={(e) => setSelectedSearchCategory(e.target.value)}>
            <option value='bookName'>Book Name</option>
            <option value='authorName'>Author Name</option>
          </select>
          <input
            className='w-full h-10 pl-5 pr-12 border border-teal-400 rounded-md focus:outline-none'
            placeholder='Search By Book Name'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className='absolute inset-y-0 right-0 flex items-center pr-3 '>
            <AiOutlineSearch className='text-teal-500 text-2xl cursor-pointer' />
          </div>
        </div>
      </div>
      {selectedBooks.length > 0 ? (
        <ShowBookByCategory books={books} selectedBooks={selectedBooks} />
      ) : searchQuery ? (
        <SearchBook books={books} searchQuery={searchQuery} searchBy={selectedSearchCategory} />
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default ShowAllBooks;
