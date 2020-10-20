import React from 'react';
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Stage3 from './components/Stage3';
import FinalStage from './components/FinalStage';

class App extends React.Component {
  state = {
    page: 1,
    firstStageAnswers: {},
    secondStageAnswers: {},
    thirdStageAnswers: {}
  }

  changePage = (pageNumber) => {
    this.setState({ page: pageNumber })
  }

  submitFirstAnswers = (answerObject) => {
    const newFirstAnswers = { ...answerObject }
    this.setState({ firstStageAnswers: newFirstAnswers })
  }

  submitSecondAnswers = (answerObject) => {
    const newSecondAnswers = { ...answerObject }
    this.setState({ secondStageAnswers: newSecondAnswers })
  }

  submitThirdAnswers = (answerObject) => {
    const newThirdAnswers = { ...answerObject }
    this.setState({ thirdStageAnswers: newThirdAnswers })
  }

  allAnswers = () => {
    const firstAnswers = this.state.firstStageAnswers
    const secondAnswers = this.state.secondStageAnswers
    const thirdAnswers = this.state.thirdStageAnswers

    if (Object.keys(secondAnswers).length) {
      const combinedAnswers = {
        ...firstAnswers,
        ...secondAnswers
      }
      return combinedAnswers
    } else {
      const combinedAnswers = {
        ...firstAnswers,
        ...thirdAnswers
      }
      return combinedAnswers
    }

  }

  render() {
    const renderPage = () => {
      switch (this.state.page) {
        case 1:
          return <Stage1 onClickFetch={this.submitFirstAnswers} pickPage={this.changePage} />
        case 2:
          return <Stage2 onClickFetch={this.submitSecondAnswers} pickPage={this.changePage} />
        case 3:
          return <Stage3 onClickFetch={this.submitThirdAnswers} pickPage={this.changePage} />
        case 4:
          return <FinalStage fetchAnswers={this.allAnswers} pickPage={this.changePage} />
        default:
          alert("Something's VERY wrong, I can feel it in my bones D:")
      }
    }

    return (
      <div>
        {renderPage()}
      </div>
    )
  }
}

export default App;