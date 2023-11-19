import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Body from '../pages/Body'
import BookList from '../pages/BookList'
import Login from '../pages/Login'
import AddBooks from '../pages/AddBooks'
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
          path:'/bookList',
          element:<BookList/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
           path:'/addBooks',
           element:<AddBooks/>          
        }
      ]
    }

  ])
  return (
    <div><RouterProvider router={routes}/></div>
  )
}

export default AppRoutes