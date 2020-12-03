import React, { useContext } from 'react'
import LoggedContext from '../context/LoggedContext'
import { goToLoginPage } from '../routes/coordinator'

const LogoutButton = (props) => {
    const {setLogged} = useContext(LoggedContext)

    const onClickLogout = () => {
        localStorage.removeItem("token")
        setLogged(false)
        goToLoginPage(props.history)
    }

    return (
        <button
            onClick={onClickLogout}
        >Logout</button>
    )
}

export default LogoutButton