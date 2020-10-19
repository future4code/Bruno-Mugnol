import React from 'react';
import styled from 'styled-components';

class Stage3 extends React.Component {
    state = {
        answerValues: {
            why: "",
            complementary: ""
        }
    }

    onChangeWhy = (event) => {
        const whyValue = event.target.value
        this.setState(() => {
            let answerValues = { ...this.state.answerValues }
            answerValues.why = whyValue
            return { answerValues }
        })
    }

    onChangeComplementary = (event) => {
        const complementaryValue = event.target.value
        this.setState(() => {
            let answerValues = { ...this.state.answerValues }
            answerValues.complementary = complementaryValue
            return { answerValues }
        })
    }

    verifyInput = () => {
        if ((this.state.answerValues.why && this.state.answerValues.complementary)) {
            this.props.pickPage(4)
        } else {
            this.props.pickPage(3)
            alert("something's wrong, I can feel it!")
        }
    }

    render() {
        return (
            <div>
                <form>
                    <ol start="5">
                        <li>Por que você não terminou um curso de graduação?</li>
                        <input type="text"
                            onChange={this.onChangeWhy}
                            value={this.state.answerValues.why} />
                        <li>Você fez algum curso complementar?</li>
                        <select onChange={this.onChangeComplementary}>
                            <option value="" disabled selected>Selecione uma opção</option>
                            <option value="technicianCourse">Curso técnico</option>
                            <option value="englishCourse">Curso de inglês</option>
                            <option value="noCourse">Não fiz curso complementar</option>
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

export default Stage3