import React from 'react'
import axios from 'axios'
import useForm from '../hooks/useForm'
import { BASE_URL } from '../constants/constants'
import { goToFeedPage, goToSignUpPage } from '../routes/coordinator'
import { useHistory } from 'react-router-dom'
import useRequireNotLoggedIn from '../hooks/useRequireNotLoggedIn'

const LoginPage = () => {
    useRequireNotLoggedIn()
    const history = useHistory()
    const [form, onChange, resetForm] = useForm({
        email: "",
        password: ""
    })

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const login = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/login`, form)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                alert(`Login realizado como ${response.data.user.username}`)
                goToFeedPage(history)
            })
            .catch(error => {
                alert("E-mail ou senha inválidos.")
                resetForm()
                console.log(error.message)
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <label>E-mail: </label>
                <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleInput}
                />
                <br />
                <label>Senha: </label>
                <input
                    name="password"
                    type="password"
                    required
                    value={form.password}
                    onChange={handleInput}
                />
                <br/>
                <button type="submit">Entrar</button>
            </form>
            <p>Ainda não possui cadastro?</p>
            <button onClick={() => goToSignUpPage(history)}>Cadastre-se aqui!</button>
        </div>
    )
}

export default LoginPage