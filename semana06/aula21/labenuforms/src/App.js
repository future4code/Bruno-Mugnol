import React from 'react';
import styled from 'styled-components';
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Stage3 from './components/Stage3';
import Stage4 from './components/Stage4';

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
    this.setState({
      firstStageAnswers: newFirstAnswers
    })
  }

  render() {
    

    const renderPage = () => {
      if (this.state.page === 1) {
        return <Stage1 onClickFetch={this.submitFirstAnswers} pickPage={this.changePage} />
      } else if (this.state.page === 2) {
        return <Stage2 />
      } else if (this.state.page === 3) {
        return <Stage3 />
      } else if (this.state.page === 4) {
        return <Stage4 />
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
