import React from 'react'
import Header from '../components/Header'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'



const Layout = () => {
    return (
        <div className='w-full'>
            
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout