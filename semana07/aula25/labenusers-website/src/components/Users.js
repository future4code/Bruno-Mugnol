import React from 'react';
import SingleUser from './SingleUser'

class Users extends React.Component {

    render() {
        const pickRender = () => {
            if (!this.props.filteredUser[0]) {
                const printedArray = this.props.usersArray.map((user) => {
                    return (
                        <div key={user.id}>
                            <SingleUser username={user.name} />
                            <button onClick={() => this.props.onClickDetails(user.id)}>Ver detalhes</button>
                            <button onClick={() => this.props.onClickDelete(user.id)}>Deletar usuário</button>
                        </div>
                    )
                })
                return printedArray
            } else {
                return (
                    <div key={this.props.filteredUser[0].id}>
                        <SingleUser username={this.props.filteredUser[0].name} />
                        <button onClick={() => this.props.onClickDetails(this.props.filteredUser[0].id)}
                        >Ver detalhes</button>
                        <button onClick={() => this.props.onClickDelete(this.props.filteredUser[0].id)}>Deletar usuário</button>
                    </div>
                )
            }
        }
        const renderedUsers = pickRender()
        return (
            <div>
                <h1>Users</h1>
                <div>
                    <div>
                        <p>Filtrar por nome</p>
                        <input
                            placeholder="Digite um nome"
                            value={this.props.filterInputValue}
                            onChange={this.props.onChangeFilterValue}
                        />
                        <button onClick={this.props.onClickSearch}>Buscar</button>
                        <button onClick={this.props.onClickClearSearch}>Limpar busca</button>
                    </div>
                    <br />
                    {renderedUsers}
                </div>
                <br />
                <button onClick={this.props.onClickChangePage}>Ir para tela de cadastro</button>
            </div>
        )

    }
}

export default Users