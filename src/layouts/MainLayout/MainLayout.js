import React from 'react'
import TopNavBar from './MenuTop/MenuTop'
import Footer from './Footer/Footer'
import './MainLayout.css'

const MainLayout = (props) => {
    const { children } = props
    return (<div className="main-layout">
        <div className="header-container">
            <TopNavBar />
        </div>
        <div className="content-container">
            {children}
        </div>
        <div className="footer-container">
            <Footer />
        </div>
    </div>)
}
export default MainLayout