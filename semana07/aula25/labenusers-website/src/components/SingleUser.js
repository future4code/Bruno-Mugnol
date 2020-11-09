import React from 'react';

class SingleUser extends React.Component {

    render(){
        return (
            <>
                <li>{this.props.username}</li>
            </>
        )
    }
}

export default SingleUser