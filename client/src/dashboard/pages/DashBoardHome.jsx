import React, { useEffect, useState } from 'react'
//dashboardItems

const DashBoardHome = () => {
  const [totalBooks,setTotalBooks] = useState('')
  const [totalWriters,setTotalWriters] = useState('')
  const [totalFoundingMembers, setTotalFoundingMembers] = useState('')
  const [totalAdmins, setTotalAdmins] = useState('')
  
  useEffect(()=>{
    fetch('http://localhost:5000/api/book/dashboardItems')
    .then((response)=> response.json())
    .then((data)=> {
      setTotalBooks(data.totalBooks)
      setTotalWriters(data.totalWriters)
      setTotalFoundingMembers(data.totalFoundingMembers)
      setTotalAdmins(data.totalAdmins)
    })
  })
  return (

    <div className='ms-64 mt-36'>
    {
       <div className='ms-64 mt-36'>
       <p>Total Books: {totalBooks}</p>
       <p>Total Writers: {totalWriters}</p>
       <p>Total FoundingMembes : {totalFoundingMembers}</p>
       <p>Total Admins : {totalAdmins}</p>
       </div>
    }
    </div>
  )
}

export default DashBoardHome