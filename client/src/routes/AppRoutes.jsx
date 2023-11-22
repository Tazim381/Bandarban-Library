import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Body from '../pages/Body'
import Login from '../pages/Login'
import AddBooks from '../pages/AddBooks'
import ShowAllBooks from '../pages/ShowAllBooks'
import BookDetails from '../pages/BookDetails'
import UpdateBooks from '../pages/UpdateBooks'
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
       },
       {
         path:'/bookDetails/:id',
         element:<BookDetails/>          
      },
      {
        path:'/updateBook/:id',
        element:<UpdateBooks/>,
        loader:({params})=>fetch(`http://localhost:5000/api/book/${params.id}`)              
     }
      ]
    }

  ])
  return (
    <div><RouterProvider router={routes}/></div>
  )
}

export default AppRoutes