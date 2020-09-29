import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="left-footer">
                <b>© 2019 MOUNTAIN KINGDOM</b>
            </div>
            <div className="middle-footer">
                <span className="cookies-button glow-on-hover">Cookies</span>
                <span>|</span>
                <span className="privacy-button glow-on-hover">Privacy</span>
            </div>
            <div className="right-footer">
                <span>Design by <b>Wizard of Oz</b></span>
            </div>
        </div>)
}
export default Footer