import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./views/Home/Home"

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "*",
    element : <h1>Not Found</h1>
  }
])

root.render(<RouterProvider router={router} />)

