import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Body from '../pages/Body'
import Login from '../pages/Login'
import AddBooks from '../pages/AddBooks'
import ShowAllBooks from '../pages/ShowAllBooks'
import BookDetails from '../pages/BookDetails'
import UpdateBooks from '../pages/UpdateBooks'
import { SecureRoute } from './SecureRoute'
import Profile from '../dashboard/pages/Profile'
import Dashboard from '../pages/Dashboard'
import DashBoardHome from '../dashboard/pages/DashBoardHome'
import RegisterNewAdmin from '../dashboard/pages/RegisterNewAdmin'
import AddFoundingMember from '../dashboard/pages/AddFoundingMember'

const secureRouteWrapper = (element) => <SecureRoute>{element}</SecureRoute>;

const AppRoutes = () => {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          index: true,
          element: <ShowAllBooks />
        },
        {
          path: '/about',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/addBooks',
          element: secureRouteWrapper(<AddBooks />)
        },
        {
          path: '/bookDetails/:id',
          element: <BookDetails />
        },
        {
          path: '/updateBook/:id',
          element: secureRouteWrapper(<UpdateBooks />),
          loader: ({ params }) => fetch(`http://localhost:5000/api/book/${params.id}`)
        },

      ]
    },
    {
      path: '/dashboard',
      element: secureRouteWrapper(<Dashboard />),
      children: [
        {
          path: '/dashboard',
          element: <DashBoardHome />
        }, {
          path: '/dashboard/registerAdmin',
          element: <RegisterNewAdmin />
        },
        {
          path: '/dashboard/profile',
          element: <Profile />
        },
        ,
        {
          path: '/dashboard/addFoundingMember',
          element: <AddFoundingMember />
        }
      ]
    }

  ])
  return (
    <div><RouterProvider router={routes} /></div>
  )
}

export default AppRoutes