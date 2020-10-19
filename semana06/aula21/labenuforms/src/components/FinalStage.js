import React from 'react';
import styled from 'styled-components';

class FinalStage extends React.Component {
    render() {
        const allTheAnswers = this.props.fetchAnswers()

        const printedAnswers = Object.values(allTheAnswers).map((answer, index) => {

            return <p><strong>Questão {index + 1}: </strong>{answer}</p>
        })

        return (
            <div>
                <h2>Obrigado por participar!</h2>
                <h3>Suas respostas foram:</h3>
                {printedAnswers}
            </div>
        )
    }
}

export default FinalStage