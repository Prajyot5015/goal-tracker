import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./views/Home/Home"
import Login from './views/Login/Login';

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
    path : "*",
    element : <h1>Not Found</h1>
  }
])

root.render(<RouterProvider router={router} />)

