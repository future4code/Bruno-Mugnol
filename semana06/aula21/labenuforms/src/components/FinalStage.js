import React from 'react';

class FinalStage extends React.Component {
    compareSelection = (option) => {
        switch (option) {
            case 'superiorIncompleto':
                return "Ensino Superior Incompleto"
            case 'superiorCompleto':
                return "Ensino Superior Completo"
            case 'medioIncompleto':
                return "Ensino Médio Incompleto"
            case 'medioCompleto':
                return "Ensino Médio Completo"
            case 'technicianCourse':
                return "Curso Técnico"
            case 'englishCourse':
                return "Curso de inglês"
            case 'noCourse':
                return "Não fiz curso complementar"
            default:
                return option
        }
    }

    render() {
        const allTheAnswers = this.props.fetchAnswers()

        const printAnswers = Object.values(allTheAnswers).map((answer, index) => {
                return <p key={index}><strong>Questão {index + 1}: </strong>{this.compareSelection(answer)}</p>
        })

        return (
            <div>
                <h2>Obrigado por participar!</h2>
                <h3>Suas respostas foram:</h3>
                {printAnswers}
                <button onClick={() => { this.props.pickPage(1) }}>Voltar ao início</button>
            </div>
        )
    }
}

export default FinalStage