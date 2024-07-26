import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import ErrorImg from './imgs/e.jpg'
import Home from "./views/Home/Home"
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "/login",
    element : <Login />
  },
  {
    path : "/signup",
    element : <Signup />
  },
  {
    path : "*",
    element : <img src={ErrorImg} alt='Error' className='error-img' />
  }
])

root.render(<RouterProvider router={router} />)

