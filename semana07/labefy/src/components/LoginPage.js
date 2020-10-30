import React from 'react';
import styled from 'styled-components';

const MommyDiv = styled.div`
    margin: 0;
    padding: 32px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

class LoginPage extends React.Component {
    state = {
        nameValue: "",
        lastNameValue: "",
        classValue: "",
    }

    onChangeName = (event) => {
        this.setState({ nameValue: event.target.value })
    }
    onChangeLastName = (event) => {
        this.setState({ lastNameValue: event.target.value })
    }
    onChangeClass = (event) => {
        this.setState({ classValue: event.target.value })
    }

    onClickLogin = () => {
        if (this.state.nameValue && this.state.lastNameValue && this.state.classValue) {
            const loggedUser = {
                name: this.state.nameValue.toLowerCase(),
                last_name: this.state.lastNameValue.toLowerCase(),
                class: this.state.classValue.toLowerCase()
            }
            localStorage.setItem("user", JSON.stringify(loggedUser))
            this.setState({
                nameValue: "",
                lastNameValue: "",
                classValue: ""
            })
            this.props.fetchAuthorization()
        } else {
            window.alert("Por favor, preencha todos campos.")
        }
    }

    render() {
        return (
            <MommyDiv>
                <br />
                <h1>Login</h1>
                <br />
                <h3>Nome:</h3>
                <input
                    value={this.state.nameValue}
                    onChange={this.onChangeName}
                    placeholder="Exemplo: Fulano"
                />
                <br />
                <h3>Sobrenome:</h3>
                <input
                    value={this.state.lastNameValue}
                    onChange={this.onChangeLastName}
                    placeholder="Exemplo: Souza"
                />
                <br />
                <h3>Turma Labenu:</h3>
                <input
                    value={this.state.classValue}
                    onChange={this.onChangeClass}
                    placeholder="Exemplo: Dumont"
                />
                <br />
                <button onClick={this.onClickLogin}>Sign In</button>
            </MommyDiv>
        )
    }
}

export default LoginPage