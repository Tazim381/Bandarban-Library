import React from 'react'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
  return (
    <div>
      <div className='flex flex-col px-6 gap-10 bg-teal-900 w-56 p-5 text-white top-0 left-0 bottom-0 fixed mt-16'>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to ='/dashboard/profile'>Profile</Link>
        <Link to='/dashboard/registerAdmin'>Register New Admin</Link>
        <Link>Add Founding Member</Link>
        <Link>Logout</Link>
      </div>
    </div>
  )
}

export default DashboardSidebar