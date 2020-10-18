import React from 'react';
import styled from 'styled-components'
import ChatBox from './components/ChatBox/ChatBox'

const MotherDiv = styled.div`
box-sizing: border-box;
width: 300px;
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
    messageInputValue: "",
    sendingMessage: false
  }

  onChangeUser = (event) => {
    this.setState({ userInputValue: event.target.value })
  }

  onChangeMessage = (event) => {
    this.setState({ messageInputValue: event.target.value })
  }

  
  render() {
    let componentChatBox = <ChatBox theArray={this.state.messagesArray} />

    return (
      <MotherDiv>

        {componentChatBox}
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
              const newMessage = {
                user: this.state.userInputValue,
                text: this.state.messageInputValue
              }
          
              const newMessagesArray = [...this.state.messagesArray, newMessage]
          
              this.setState({
                messagesArray: newMessagesArray,
                messageInputValue: ""
              }, () => {
                console.log(this.state.messagesArray);
                componentChatBox = <ChatBox theArray={this.state.messagesArray} />
              })
            }}
          >Send</button>
        </footer>
      </MotherDiv>
    );
  }
}
export default App;
