import React, { Component } from 'react'
import styled from 'styled-components'



class ChatBox extends Component {
    state = {
        chatArray: this.props.theArray
    }
    
    render() {
        {console.log(this.state.chatArray)}
        const chatBox = this.state.chatArray.map((message, index) => {
            return (
                <div key={index}>
                    <li><strong>{message.user}</strong></li>
                    <p>{message.text}</p>
                </div>
            )
        })

        return (
            <div>
                {chatBox}
            </div>
        )
    }

}

export default ChatBox