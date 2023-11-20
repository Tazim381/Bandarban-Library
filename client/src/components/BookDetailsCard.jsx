import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const BookDetailsCard = ({book}) => {
    return (
        <div className=' h-screen flex items-center justify-center bg-teal-50 '>
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
                </CardBody>
            </Card>
        </div>
    )
}

export default BookDetailsCard