import React from 'react';
import styled from 'styled-components';

class Stage1 extends React.Component {
    state = {
        nextPage: 1,
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

    onChangeScholarship = (event) => {
        const scholarshipValue = event.target.value
        this.setState(() => {
            let answerValues = { ...this.state.answerValues }
            answerValues.scholarship = scholarshipValue
            return { answerValues }
        })
    }

    verifyInput = () => {
        if ((this.state.answerValues.name && (this.state.answerValues.age > 0)) && this.state.answerValues.email) {
            console.log('yay')
            this.props.pickPage(this.nextStage(this.state.answerValues))
        } else {
            alert("something's wrong, I can feel it!")
            console.log('input inválido')
        }
    }

    nextStage = (basicInfo) => {
        console.log(basicInfo.scholarship)
        switch (basicInfo.scholarship) {            
          case 'superiorIncompleto':
            return 2
          case 'superiorCompleto':
            return 2
          case 'medioIncompleto':
            return 3
          case 'medioCompleto':
            return 3
          default:
              console.log('defÔ')
            return 1
        }
      }

    render() {

        return (
            <div>
                <form>
                    <ol>
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
                        <select onChange={this.onChangeScholarship}>
                            <option value="medioIncompleto">Ensino Médio Incompleto</option>
                            <option value="medioCompleto">Ensino Médio Completo</option>
                            <option value="superiorIncompleto">Ensino Superior Incompleto</option>
                            <option value="superiorCompleto">Ensino Superior Completo</option>
                        </select>
                    </ol>
                </form>
                <button onClick={() => {
                    this.props.onClickFetch(this.state.answerValues)
                    this.verifyInput()
                }}
                >Próxima etapa</button>
            </div>
        )
    }
}

export default Stage1