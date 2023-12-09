import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai"
import { IoMdPersonAdd } from "react-icons/io"
import { IoMdExit } from "react-icons/io";


const DashboardSidebar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);


  const handleLogout = () => {
    localStorage.removeItem('set-token-for-user')
    navigate("/")
    window.location.reload()
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div
        className="cursor-pointer fixed z-50 top-5 left-5"
        onClick={toggleSidebar}
      >
         ☰
      </div>
      <div
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transform transition-transform ease-in-out duration-300 fixed flex flex-col gap-y-3 bg-teal-900 w-64 px-5 text-white top-0 left-0 bottom-0 pt-2 mt-16 md:translate-x-0`}
      >
        <Link className=' px-4 py-2 rounded-md hover:bg-teal-700' to='/dashboard'>Dashboard</Link>
        <div className='flex items-center gap-x-1 px-4 py-2 rounded-md hover:bg-teal-700'>
          <AiOutlineUser />
          <Link to='/dashboard/profile'>Profile</Link>
        </div>
        <div className='flex items-center gap-x-1 px-4 py-2 rounded-md hover:bg-teal-700'>
          <IoMdPersonAdd />
          <Link to='/dashboard/registerAdmin'>Register New Admin</Link>
        </div>
        <div className='flex items-center gap-x-1 px-4 py-2 rounded-md hover:bg-teal-700'>
          <IoMdPersonAdd />
          <Link to='/dashboard/addFoundingMember'>Add Founding Member</Link>
        </div>
        <div className='flex items-center gap-x-1 px-4 py-2 rounded-md hover:bg-teal-700'>
          <IoMdExit />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default DashboardSidebar;