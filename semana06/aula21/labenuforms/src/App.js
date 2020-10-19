import React from 'react';
import styled from 'styled-components';
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage1';
import Stage3 from './components/Stage1';
import Stage4 from './components/Stage1';

class App extends React.Component {
  state = {
    stage1: "",
    firstStageAnswers: {},
    answer5NoSup: "",
    answer6NoSup: "",
    answer5Sup: "",
    answer6Sup: ""
  }

  // submitFirstAnswers = (answerObject) => {
  //   const newFirstAnswers = {...answerObject}
  //   const newScholarship = answerObject.answer4
  //   this.setState({
  //     firstFourAnswers: newFirstAnswers,
  //     scholarship: newScholarship
  //   })
  // }

  render() {
    // const nextStage = (degree) => {
    //   switch (degree) {
    //     case 'superiorIncompleto':
    //       return <Stage2 />
    //     case 'superiorCompleto':
    //       return <Stage2 />
    //     case 'medioIncompleto':
    //       return <Stage3 />
    //     case 'medioCompleto':
    //       return <Stage3 />
    //     default:
    //       return <Stage1 onClickFetch={submitFirstAnswers} />
    //   }
    // }

    // let stagePrinted = nextStage(this.state.firstStageAnswers.scholarship)

    return (
      <div>
        {/* {stagePrinted} */}
        <Stage1 />
      </div>
    )
  }
}

export default App;
