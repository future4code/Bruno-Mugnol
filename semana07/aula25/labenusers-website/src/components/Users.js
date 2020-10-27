import React from 'react';
import SingleUser from './SingleUser'

class Users extends React.Component {

    render() {
        const renderedUsers = this.props.usersArray.map((user) => {
            return (
                <div key={user.id}>
                    <SingleUser username={user.name} />
                    <button onClick={() => this.props.onClickDetails(user.id)}>Ver detalhes</button>
                    <button onClick={() => this.props.onClickDelete(user.id)}>Deletar usuário</button>
                </div>
            )
        })

        return (
            <div>
                <div>
                    <h1>Users</h1>
                    {renderedUsers}
                </div>
                <br />
                <button onClick={this.props.onClickChangePage}>Ir para tela de cadastro</button>
            </div>
        )

    }
}

export default Users