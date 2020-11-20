import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { baseUrl, contentTypeHeader } from '../constants/constants';

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const history = useHistory()

  const goBackHome = () => {
    history.push("/")
  }

  const goToAdminHomePage = () => {
    history.push("/home/admin")
  }

  const attemptLogin = () => {
    const body = {
      email: emailValue,
      password: passwordValue
    }

    axios.post(`${baseUrl}/login`, body, contentTypeHeader)
      .then(response => {
        localStorage.setItem("token", response.data.token)
        goToAdminHomePage()
      })
      .catch(error => {
        window.alert("Email ou senha inválidos.")
        setPasswordValue("")
        console.log(error.message)
      })
  }

  return (
    <div>
      <p>LoginPage</p>
      <input placeholder="example_email@gmail.com" type="email"
        value={emailValue}
        onChange={(event) => { setEmailValue(event.target.value) }}
      />
      <input placeholder="123senha456" type="password"
        value={passwordValue}
        onChange={(event) => { setPasswordValue(event.target.value) }}
      />
      <button onClick={goBackHome}>Voltar</button>
      <button onClick={attemptLogin}>Login</button>
    </div>
  );
}

export default LoginPage