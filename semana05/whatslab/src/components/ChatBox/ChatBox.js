import React, { Component } from 'react'
import styled from 'styled-components'

const InlineP = styled.p`
display: inline;
`

class ChatBox extends Component {
    render() {
        const chatBox = this.props.theArray.map((message, index) => {
            return (
                <div key={index}>
                    <InlineP><strong>{message.user}: </strong></InlineP>
                    <InlineP>{message.text}</InlineP>
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