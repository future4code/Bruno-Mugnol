import React from 'react';

class Stage2 extends React.Component {
    state = {
        answerValues: {
            career: "",
            institution: ""
        }
    }

    onChangeCareer = (event) => {
        const careerValue = event.target.value
        this.setState(() => {
            let answerValues = { ...this.state.answerValues }
            answerValues.career = careerValue
            return { answerValues }
        })
    }

    onChangeInstitution = (event) => {
        const institutionValue = event.target.value
        this.setState(() => {
            let answerValues = { ...this.state.answerValues }
            answerValues.institution = institutionValue
            return { answerValues }
        })
    }

    verifyInput = () => {
        if ((this.state.answerValues.career && this.state.answerValues.institution)) {
            this.props.pickPage(4)
        } else {
            this.props.pickPage(2)
            alert("something's wrong, I can feel it!")
        }
    }

    render() {
        return (
            <div>
                <form>
                    <ol start="5">
                        <li>Qual curso?</li>
                        <input type="text"
                            onChange={this.onChangeCareer}
                            value={this.state.answerValues.career} />
                        <li>Qual instituição?</li>
                        <input type="text"
                            onChange={this.onChangeInstitution}
                            value={this.state.answerValues.institution} />
                    </ol>
                </form>
                <button onClick={() => { this.props.pickPage(1) }}>Voltar</button>
                <button onClick={() => {
                    this.props.onClickFetch(this.state.answerValues)
                    this.verifyInput()
                }}
                >Próxima etapa</button>
            </div>
        )
    }
}

export default Stage2