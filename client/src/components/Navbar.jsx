import React from 'react'
import { ImLibrary } from "react-icons/im";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminProfile, setAdminProfile] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);

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

  const handleLogout = () => {
    localStorage.removeItem('set-token-for-user');
    setIsAuthenticated(false);
    setAdminProfile('');
    alert('Logged out successfully');
    window.location.reload();
  };

  return (
    <div className='flex justify-between items-center font-semibold bg-teal-900 text-white py-5 px-3 cursor-pointer left-0 top-0 right-0  fixed z-50 shadow-lg'>
      <Link to="/" className='flex justify-between items-center gap-x-2'>
        <div className='flex items-center'>
          <ImLibrary className='w-8 h-8' />
        </div>
        <div>
          <div>Library Name</div>
        </div>
      </Link>
      <div className='flex justify-between gap-x-4'>
        <Link  to="/" className='px-2 py-1 rounded-md hover:bg-teal-800 active:bg-teal-700'>Home</Link>
        <Link  to="/about" className='px-2 py-1 rounded-md hover:bg-teal-800 active:bg-teal-700'>About</Link>
      </div>
      <div className='flex justify-between gap-x-4'>
        {/* <div className='px-2 py-1 rounded-md hover:bg-teal-800 active:bg-teal-700'>Language</div> */}
        {
          isAuthenticated ? (<button onClick={(e) => setShowSidebar(!showSidebar)} className='px-2 py-1 rounded-md hover:bg-teal-800 active:bg-teal-700'>{adminProfile.userName}</button>)
            : (
              <Link to='/login' className='px-2 py-1 rounded-md hover:bg-teal-800 active:bg-teal-700'>Login</Link>
            )
        }
        {
          showSidebar && (
            <Sidebar isSidebar={showSidebar} handleLogout={handleLogout} />
          )
        }
      </div>
    </div>
  )
}

export default Navbar