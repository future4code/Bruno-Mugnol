import React from 'react';
import styled from 'styled-components'
import ChatBox from './components/ChatBox/ChatBox'

const MotherDiv = styled.div`
box-sizing: border-box;
width: 60vw;
height: 100vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
border: 1px solid black;
`

class App extends React.Component {
  state = {
    messagesArray: [
      {
        user: 'Bob',
        text: "yo what's up?"
      },
      {
        user: 'Billy',
        text: "waaaazzzaaaapp"
      },
      {
        user: 'Berta',
        text: "wassuuuuup"
      }
    ],
    userInputValue: "",
    messageInputValue: ""
  }

  onChangeUser = (event) => {
    this.setState({ userInputValue: event.target.value })
  }

  onChangeMessage = (event) => {
    this.setState({ messageInputValue: event.target.value })
  }

  onClickSend = () => {
    const newMessage = {
      user: this.state.userInputValue,
      text: this.state.messageInputValue
    }

    const newMessagesArray = [...this.state.messagesArray, newMessage]

    this.setState({
      messagesArray: newMessagesArray,
      messageInputValue: ""
    })
  }

  render() {
    const chatBox = <ChatBox theArray={this.state.messagesArray} />

    return (
      <MotherDiv>
        <div>
          {chatBox}
        </div>
        <footer>
          <input
            value={this.state.userInputValue}
            onChange={this.onChangeUser}
            placeholder="User"
          />
          <input
            value={this.state.messageInputValue}
            onChange={this.onChangeMessage}
            placeholder="Message"
          />
          <button
            onClick={() => {
              this.onClickSend();
            }}
          >Send</button>
        </footer>
      </MotherDiv>
    );
  }
}
export default App;
