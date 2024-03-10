import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Homepage from './components/Homepage';
import Stocks from './components/Stocks';


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'
import NavBar from './components/Navbar';
import Price from './components/Price';
import About from './components/About';
import TradePage from './components/TradingViewWidget';


/** root routes */
const router = createBrowserRouter([
    {
        path:'/trade',
        element:<TradePage/>
    },
    {
        path: '/',
        element : <Homepage/>
    },
    {
        path: '/nav',
        element: <NavBar/>
    },
    {
        path: '/stocks',
        element: <Stocks/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/price',
        element: <Price/>
    },
    {
        path : '/login',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
