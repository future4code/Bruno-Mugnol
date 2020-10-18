import React from 'react';
<<<<<<< HEAD
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
=======
import './App.css';
>>>>>>> 0538ca05bfaba03ee3217f629c14e167eae3d3f9

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

<<<<<<< HEAD
  onClickSend = () => {
=======
  sendText = () => {
>>>>>>> 0538ca05bfaba03ee3217f629c14e167eae3d3f9
    const newMessage = {
      user: this.state.userInputValue,
      text: this.state.messageInputValue
    }

    const newMessagesArray = [...this.state.messagesArray, newMessage]

    this.setState({
      messagesArray: newMessagesArray,
      messageInputValue: ""
<<<<<<< HEAD
    }, () => {
      console.log(this.state.messagesArray);
    })

=======
    })
>>>>>>> 0538ca05bfaba03ee3217f629c14e167eae3d3f9
  }

  render() {
    const chatBox = this.state.messagesArray.map((message, index) => {
      return (
        <div key={index}>
          <p><strong>{message.user}</strong></p>
          <p>{message.text}</p>
        </div>
      )
    })

    return (
      <div className="App">
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
<<<<<<< HEAD
            onClick={() => {
              this.onClickSend();
            }}
=======
            onClick={this.sendText}
>>>>>>> 0538ca05bfaba03ee3217f629c14e167eae3d3f9
          >Send</button>
        </footer>
      </div>
    );
  }
}
export default App;
