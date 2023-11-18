import React from 'react'
import { ImLibrary } from "react-icons/im";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminProfile, setAdminProfile] = useState('');

  useEffect(() => {
    const isUser = localStorage.getItem('set-token-for-user');
    if (isUser) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/profile", {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
      }
    })
      .then(response => response.json())
      .then(data => {
        setAdminProfile(data)
      }
      )
  }, [isAuthenticated])

  return (
    <div className='flex justify-between items-center font-semibold bg-teal-900 text-white py-3 px-3 cursor-pointer'>
        <div className='flex justify-between items-center gap-x-2'>
            <div className='flex items-center'>
            <ImLibrary className='w-8 h-8'/>
            </div>
            <div>
                <div>Library Name</div>
            </div>
        </div>
        <div className='flex justify-between gap-x-4'>
        <div className='px-2 py-1 rounded-md hover:bg-teal-800 active:bg-teal-700'>Book List</div>
            <div className='px-2 py-1 rounded-md hover:bg-teal-800 active:bg-teal-700'>Books Category</div>
        </div>
        <div className='flex justify-between gap-x-4'>
            <div className='px-2 py-1 rounded-md hover:bg-teal-800 active:bg-teal-700'>Language</div>
            {
                isAuthenticated ?(<div className='px-2 py-1 rounded-md hover:bg-teal-800 active:bg-teal-700'>{adminProfile.userName}</div>): (
                 <Link to='/login' className='px-2 py-1 rounded-md hover:bg-teal-800 active:bg-teal-700'>Login</Link>
                )
            }
        </div>
    </div>
  )
}

export default Navbar