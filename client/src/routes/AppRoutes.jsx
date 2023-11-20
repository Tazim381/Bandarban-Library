import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Body from '../pages/Body'
import Login from '../pages/Login'
import AddBooks from '../pages/AddBooks'
import ShowAllBooks from '../pages/ShowAllBooks'
const AppRoutes = () => {

  const routes=  createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children:[
        {
           index:true,
           element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
           path:'/addBooks',
           element:<AddBooks/>          
        },
        {
          path:'/allBooks',
          element:<ShowAllBooks/>          
       }
      ]
    }

  ])
  return (
    <div><RouterProvider router={routes}/></div>
  )
}

export default AppRoutes