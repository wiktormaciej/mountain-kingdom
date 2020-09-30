import React from 'react'
import './Error.css'
const Error = (props) => {
    const { message } = props
    return (
        //TO DO
        <div className="error">
            {message}
        </div>)
}
export default Error