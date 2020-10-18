import React from 'react';
import styled from 'styled-components'
import './App.css';

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

  sendText = () => {
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
            onClick={this.sendText}
          >Send</button>
        </footer>
      </div>
    );
  }
}
export default App;
