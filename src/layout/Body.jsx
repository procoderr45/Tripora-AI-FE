import React from 'react'
import Navbar from '../components/app/Navbar'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            
        </>
    )
}

export default Body