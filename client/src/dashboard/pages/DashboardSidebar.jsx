import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai"
import { IoMdPersonAdd } from "react-icons/io"
import { IoMdExit } from "react-icons/io";


const DashboardSidebar = () => {
  const navigate = useNavigate()


  const handleLogout = () => {
    localStorage.removeItem('set-token-for-user')
    navigate("/")
    window.location.reload()
  }
  return (
    <div>
      <div className='flex flex-col px-6 gap-10 bg-teal-900 w-64 p-5 text-white top-0 left-0 bottom-0 fixed mt-16'>
        <Link to='/dashboard'>Dashboard</Link>
        <div className='flex items-center gap-2'>
          <AiOutlineUser />
          <Link to='/dashboard/profile'>Profile</Link>
        </div>
        <div className='flex items-center gap-2'>
          <IoMdPersonAdd />
          <Link to='/dashboard/registerAdmin'>Register New Admin</Link>
        </div>
        <div className='flex items-center gap-2'>
          <IoMdPersonAdd />
          <Link to='/dashboard/addFoundingMember'>Add Founding Member</Link>
        </div>
        <div className='flex items-center gap-2'>
          <IoMdExit />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default DashboardSidebar