import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchBook from '../components/SearchBook';

const ShowAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery,setSearchQuery] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/api/book/allBooks')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, [books]); 

  return (
    <div className='mb-10'>
      <div className='flex items-center justify-center mt-10'>
        
        <div className='flex gap-10 relative w-5/6'>
          <select className='h-10 border border-teal-400 rounded-md pl-5 focus:outline-none '>
            <option disabled>Filter By Category</option>
            <option>উপন্যাস</option>
            <option>নাটক</option>
            <option>ছোট গল্প</option>
            <option>কবিতা</option>
          </select>
          <input
            className='w-full h-10 pl-5 pr-12 border border-teal-400 rounded-md focus:outline-none'
            placeholder='Search By Book Name'
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
          />
          <div className='absolute inset-y-0 right-0 flex items-center pr-3 '>
            <AiOutlineSearch className='text-teal-500 text-2xl cursor-pointer' />
          </div>
        </div>
      </div>
      {
        searchQuery?<SearchBook books={books} searchQuery={searchQuery}/>:<BookList books={books} />
      }
    </div>
  );
};

export default ShowAllBooks;
