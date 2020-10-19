import React from 'react';
import styled from 'styled-components';

class Stage1 extends React.Component {
    state = {
        answerValues: {
            name: "",
            age: "",
            email: "",
            scholarship: ""
        }
    }

    onChangeName = (event) => {
        const nameValue = event.target.value
        this.setState(() => {
            let answerValues = { ...this.state.answerValues }
            answerValues.name = nameValue
            return { answerValues }
        })
    }

    onChangeAge = (event) => {
        const ageValue = event.target.value
        this.setState(() => {
            let answerValues = { ...this.state.answerValues }
            answerValues.age = ageValue
            return { answerValues }
        })
    }

    onChangeEmail = (event) => {
        const emailValue = event.target.value
        this.setState(() => {
            let answerValues = { ...this.state.answerValues }
            answerValues.email = emailValue
            return { answerValues }
        })
    }

    render() {
        return (
            <div>
                <form>
                    <li>Nome</li>
                    <input type="text"
                        onChange={this.onChangeName}
                        value={this.state.answerValues.name} />
                    <li>Idade:</li>
                    <input type="number"
                        onChange={this.onChangeAge}
                        value={this.state.answerValues.age} />
                    <li>E-mail:</li>
                    <input type="text"
                        onChange={this.onChangeEmail}
                        value={this.state.answerValues.email} />
                    <li>Grau de escolaridade:</li>
                    <select>
                        <option value="medioIncompleto">Ensino Médio Incompleto</option>
                        <option value="medioCompleto">Ensino Médio Completo</option>
                        <option value="superiorIncompleto">Ensino Superior Incompleto</option>
                        <option value="superiorCompleto">Ensino Superior Completo</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Stage1