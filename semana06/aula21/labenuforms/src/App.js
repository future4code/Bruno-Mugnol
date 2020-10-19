import React from 'react';
import styled from 'styled-components';
import Stage1 from './components/Stage1';

class App extends React.Component {
  state = {
    stage1: "",
    scholarship: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5NoSup: "",
    answer6NoSup: "",
    answer5Sup: "",
    answer6Sup: ""
  }



  render() {
    const nextStage = (degree) => {
      switch (degree) {
        case 'superiorIncompleto':
          return <Stage2 />
        case 'superiorCompleto':
          return <Stage2 />
        case 'medioIncompleto':
          return <Stage3 />
        case 'medioCompleto':
          return <Stage3 />
        default:
          return <Stage1 />
      }
    }

    let stagePrinted = nextStage(scholarship)

    return (
      <div>
        {stagePrinted}
      </div>
    )
  }
}

export default App;
