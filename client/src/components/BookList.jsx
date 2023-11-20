import React from 'react'

const BookList = ({books}) => {
  return (
    <div className='flex flex-col items-center'>
    <div className='flex flex-wrap ml-auto mr-auto'>
    {books.map((data) => (
        <div className='p-2 m-2 border-2 rounded-md hover:bg-slate-100'>
            <div className='w-36 h-64'>
            <img className='w-full' src={data.image} alt="Image 1" />
            </div>
            <div className='flex flex-col items-center'>
                <div className='font-semibold text-lg'>{data.bookName}</div>
                <div className='text-slate-400'>{data.authorName}</div>
                <div className='bg-sky-600 text-white px-4 py-1 rounded-sm'>View Details</div>
            </div>
        </div>
    ))}
    </div>
</div>
  )
}

export default BookList