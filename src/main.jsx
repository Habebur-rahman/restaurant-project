import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Menu from './Pages/Menu/Menu/Menu.jsx';
import {  HelmetProvider } from 'react-helmet-async';
import Order from './Pages/Order/Order.jsx';
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
      },
      {
           path:"menu",
           element:<Menu></Menu>
      },
      {
        path:"order",
        element:<Order></Order>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"signup",
        element:<Signup></Signup>
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
     <RouterProvider router={router} />
     </HelmetProvider>
  </React.StrictMode>,
)
