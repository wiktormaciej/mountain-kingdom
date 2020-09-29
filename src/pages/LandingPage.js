import React, { useState } from 'react'
import './LandingPage.css'
import RoundButton from '../components/RoundButton/RoundButton'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import LoginModalForm from '../components/LoginModalForm/LoginModalForm'

const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const closeModal = () => {
        setIsModalOpen(false)
    }
    const openModal = () => {
        setIsModalOpen(true)
    }
    return (
        <div className="landing-page">
            <h1 className="title-text">Mountain kingdom</h1>
            <RoundButton onClick={() => { openModal() }}>ENTER THE GATES</RoundButton>
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                center
                showCloseIcon={false}
                classNames={{ modal: "modal" }} >
                <LoginModalForm />
            </Modal>
        </div >)
}

export default LandingPage