import React from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const BookDetailsCard = ({ book }) => {
    const Navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('set-token-for-user'));

    const data = useLoaderData();
    const handleDelete = (id) => {
        if (!token) {
            Navigate("/login");
            return;
        }
        swal({
            title: "Good job!",
            text: "Successfully deleted!",
            icon: "success",
        });
        axios.delete(`http://localhost:5000/api/book/deleteBook/${id}`)
            .then(res => console.log(res.data));
        Navigate("/allBooks");
    };
    return (
        <div className=' h-screen flex items-center justify-center bg-teal-50 mt-5'>
            <Card className="w-full max-w-[70rem] h-3/4 flex-row gap-10">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none border-2"
                >
                    <img
                        src={book.image}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className='flex flex-col  justify-center'>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                        <p ><span className='font-bold'> Book Name : </span> {book.bookName}</p>
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        <p><span className='font-bold'>Author Name :</span> {book.authorName}</p>
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        <p><span className='font-bold'>Published Year : </span>{book.publishedYear}</p>
                        <p><span className='font-bold'>Category : </span>{book.category}</p>
                        <p><span className='font-bold'>Book Language : </span>{book.bookLanguage}</p>
                        <p><span className='font-bold'>Book Entry Language : </span>{book.entryLanguage}</p>
                    </Typography>
                    <Typography className='flex justify-around'>
                        <Link to={`/updateBook/${book._id}`} className='bg-cyan-600 text-white px-3 py-1 rounded-md'>Update</Link>
                        <Link onClick={() => handleDelete(book._id)} className='bg-red-600 text-white px-3 py-1 rounded-md'>Delete</Link>
                    </Typography>
                </CardBody>
            </Card>
        </div>
    )
}

export default BookDetailsCard