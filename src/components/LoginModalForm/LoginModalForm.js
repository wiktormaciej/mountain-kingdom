import React, { useState } from 'react'
import './LoginModalForm.css'
import RoundButton from '../RoundButton/RoundButton'
import InputField from '../InputField/InputField'
import signIn from '../../utils/fetchAPI'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'
import Error from '../Error/Error'
import SuccessBar from '../SuccessBar/SuccessBar'
const LoginModalContent = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        const email = event.target[0].value
        const password = event.target[1].value
        try {
            setIsLoading(true)
            const response = await signIn({ email, password })
            if (response.status && response.status === "error") {
                setErrorMessage(response.message)
                return
            }
            if (response.status === "ok") {
                setSuccessMessage(response.message)
                return
            }
        }
        catch (e) {
            console.log(e)
            setErrorMessage(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    if (isLoading) return <LoadingIndicator />
    if (errorMessage) return <Error message={errorMessage} />
    if (successMessage) return <SuccessBar message={successMessage} />
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <span>Are you a Mountain Knight?</span>
            <InputField type="email" required placeholder="Email" />
            <InputField type="password" required placeholder="Password" />
            <RoundButton type="submit">LOG IN</RoundButton>
        </form>)
}
export default LoginModalContent