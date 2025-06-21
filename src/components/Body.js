import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../store/userSlice'

function Body() {
  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login />
      // element:<DemoOne />
    },
    {
      path:"/browser",
      element:<Browse />
    },
  ])

 

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
