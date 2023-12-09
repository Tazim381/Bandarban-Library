import React from 'react'
import { Link } from 'react-router-dom'

const DashboardNavbar = () => {
  return (
    <div className='bg-slate-400 pl-12 py-5 px-3 cursor-pointer left-0 top-0 right-0  fixed z-50 shadow-lg text-white flex justify-items-center'>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default DashboardNavbar