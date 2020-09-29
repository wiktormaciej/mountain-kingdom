import React from 'react'
import './SuccessBar.css'
const SuccessBar = (props) => {
    const { message } = props
    return (
        <div className="success-bar">
            {message}
        </div>)
}
export default SuccessBar