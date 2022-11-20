import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Sections/Footer'
import Header from '../Components/Sections/Header'

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className="main-section">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout