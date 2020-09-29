import React from 'react'
import './Error.css'
const Error = (props) => {
    const { message } = props
    return (
        <div className="error">
            {message}
        </div>)
}
export default Error