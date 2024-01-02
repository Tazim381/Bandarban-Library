import React from 'react'

const DashboardComponent = ( {title,icon,noOfItems}) => {
  return (
    <div className='flex gap-x-2 bg-slate-200  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] px-3 py-2 rounded-md'>
          <div className='flex items-center'>
          {icon}
          </div>
          <div>
            <div className='mt-auto mb-auto'>{title}{noOfItems}</div>
          </div>
        </div>
  )
}

export default DashboardComponent