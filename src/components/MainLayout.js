import React from 'react'
import { Outlet } from 'react-router-dom'
import RequireAdmin from '../Middleware/RequireAdmin'
import Footer from './footer/Footer'
import NavBar from './nav/NavBar'
import Sidebar from './sidebar/Sidebar'

const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <NavBar />
            <RequireAdmin>
                <Outlet />
            </RequireAdmin>
            <Footer />
        </>
    )
}

export default MainLayout