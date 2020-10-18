import React, { Component } from 'react'
import styled from 'styled-components'

const InlineLi = styled.li`
display: inline;
`

const InlineP = styled.p`
display: inline;
`

class ChatBox extends Component {
    render() {
        const chatBox = this.props.theArray.map((message, index) => {
            return (
                <div key={index}>
                    <InlineLi><strong>{message.user}: </strong></InlineLi>
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