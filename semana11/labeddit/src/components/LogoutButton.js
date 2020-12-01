import React from 'react'
import { goToLoginPage } from '../routes/coordinator'

const LogoutButton = (props) => {
    const clearTokenFromStorage = () => {
        localStorage.setItem("token", "")
    }

    return (
        <button
            onClick={() => {
                clearTokenFromStorage()
                goToLoginPage(props.history)
            }}
        >Logout</button>
    )
}

export default LogoutButton