import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import BookList from '../components/BookList';

const ShowAllBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/api/book/allBooks')
        .then(res=>res.json())
        .then((data)=>{
            setBooks(data)
        })
    })
  return (
    <div>
       <BookList books={books}/>
    </div>
  )
}

export default ShowAllBooks