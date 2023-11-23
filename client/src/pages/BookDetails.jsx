import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BookDetailsCard from '../components/BookDetailsCard';
import axios from 'axios';


const BookDetails = () => {
  const { id } = useParams()
  const [book, setBook] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/api/book/${id}`)
      .then(response => {
        const data = response.data
        setBook(data)
      })
      .catch((error) => {
        console.log("Error fetching book data:", error);
      });
  })
  return (
    <div>
      <BookDetailsCard book={book} />
    </div>
  )
}

export default BookDetails