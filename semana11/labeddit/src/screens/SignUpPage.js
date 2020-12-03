import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { BASE_URL } from '../constants/constants'
import LoggedContext from '../context/LoggedContext'
import useForm from '../hooks/useForm'
import useRequireNotLoggedIn from '../hooks/useRequireNotLoggedIn'
import { goToFeedPage, goToLoginPage } from '../routes/coordinator'

const SignUpPage = () => {
    const {logged, setLogged} = useContext(LoggedContext)
    useRequireNotLoggedIn(logged, setLogged)

    const history = useHistory()
    const [form, onChange, resetForm] = useForm({
        email: "",
        username: "",
        password: ""
    })

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const signUp = (event) => {        
        event.preventDefault()
        axios.post(`${BASE_URL}/signup`, form)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                alert(`Cadastro realizado com sucesso! Seja bem-vindo(a), ${response.data.user.username}`)
                setLogged(true)
                goToFeedPage(history)
            })
            .catch(error => {
                alert("E-mail ou nome de usuário já cadastrados.")
                resetForm()
                console.log(error.message)
            })
    }

    return (
        <div>
            <h1>Cadastre-se!</h1>
            <form onSubmit={signUp}>
                <label>Nome de usuário: </label>
                <input
                    name="username"
                    type="text"
                    required
                    value={form.username}
                    onChange={handleInput}
                />
                <br />

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
                <br />
                <button type="submit">Cadastrar</button>
            </form>

            <p>Já possui um cadastro?</p>

            <button onClick={() => goToLoginPage(history)}
            >Entre aqui!</button>
        </div>
    )
}

export default SignUpPage