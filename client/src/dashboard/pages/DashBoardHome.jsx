import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
=======
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { FaBook } from "react-icons/fa";
import { PiUserListFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi2";
import { RiAdminFill } from "react-icons/ri";
import BooksByAuthor from '../../components/BooksByAuthor';
import DashboardComponent from '../../components/DashboardComponent';

ChartJS.register(ArcElement, Tooltip, Legend);
>>>>>>> 1ef4b25 (added dashboard)
//dashboardItems

const DashBoardHome = () => {
  const [totalBooks,setTotalBooks] = useState('')
  const [totalWriters,setTotalWriters] = useState('')
  const [totalFoundingMembers, setTotalFoundingMembers] = useState('')
  const [totalAdmins, setTotalAdmins] = useState('')
<<<<<<< HEAD
  
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
=======
  const [authorBooks, setAuthorBooks] = useState({});
  
  useEffect(() => {
    fetch('http://localhost:5000/api/book/dashboardItems')
      .then((response) => response.json())
      .then((data) => {
        setTotalBooks(data.totalBooks);
        setTotalWriters(data.totalWriters);
        setTotalFoundingMembers(data.totalFoundingMembers);
        setTotalAdmins(data.totalAdmins);
        setAuthorBooks(data.authorBooks || {});
      });
  }, []);
  const data = {
    labels: ["Books", "Writers", "Founding Members", "Admins"],
    datasets: [
      {
        data: [totalBooks, totalWriters, totalFoundingMembers,totalAdmins],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  return (

    <div className='ms-64 mt-24 flex flex-col px-5'>
      <div className='flex'>
      <div className='flex flex-col gap-y-8 mt-auto mb-auto'>
        <DashboardComponent title={"Total Number of Books: "} icon={<FaBook />} noOfItems={totalBooks}/>
        <DashboardComponent title={"Total Number of Writers: "} icon={<PiUserListFill />} noOfItems={totalWriters}/>
        <DashboardComponent title={"Total Number of Founding Members: "} icon={<HiUserGroup />} noOfItems={totalFoundingMembers}/>
        <DashboardComponent title={"Total Number of Admins: "} icon={<RiAdminFill />} noOfItems={totalAdmins}/>
      </div>
      <div className='w-3/6 ml-auto mr-auto'>
        <h1 className='flex items-center justify-center text-xl'>Dashboard Information</h1>
        <Doughnut data={data} />
        </div>
      </div>
      <div className='w-4/5 mt-10 ml-auto mr-auto'><BooksByAuthor authorBooks={authorBooks} /></div>
>>>>>>> 1ef4b25 (added dashboard)
    </div>
  )
}

export default DashBoardHome