import React from 'react'
import logo from '../../../assets/images/logo.png'
import './MenuTop.css'
const TopNavBar = () => {
    return (
        <div className="menu-top">
            <span className="menu-top-option glow-on-hover">ABOUT</span>
            <span className="menu-top-option glow-on-hover">OFFER</span>
            <span className="logo"><img src={logo} alt="Logo" /></span>
            <span className="menu-top-option glow-on-hover">GALLERY</span>
            <span className="menu-top-option glow-on-hover">CONTACT</span>
        </div>)
}
export default TopNavBar