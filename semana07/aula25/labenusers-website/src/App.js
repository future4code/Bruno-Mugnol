import React from 'react';
import axios from 'axios';

import SignUp from './components/SignUp'
import Users from './components/Users'

class App extends React.Component {
  state = {
    pageNumber: 1,
    usersArray: [],
    nameInputValue: "",
    emailInputValue: ""
  }

  componentDidMount = () => {
    this.getAllUsers()
  }

  componentDidUpdate = () => {
    this.getAllUsers()
  }

  onChangeNameValue = (event) => {
    this.setState({ nameInputValue: event.target.value })
  }

  onChangeEmailValue = (event) => {
    this.setState({ emailInputValue: event.target.value })
  }

  onClickRegister = () => {
    this.createUser()
  }

  onClickChangePage = () => {
    switch (this.state.pageNumber) {
      case 1:
        this.setState({ pageNumber: 2 })
        break
      case 2:
        this.setState({ pageNumber: 1 })
        break
      default:
        this.setState({ pageNumber: 1 })
        break
    }
  }

  onClickDelete = (userId) => {
    this.deleteUser(userId)
  }

  createUser = () => {
    const body = {
      name: this.state.nameInputValue,
      email: this.state.emailInputValue
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "bruno-mugnol-dumont"
      }
    }).then(response => {
      alert('Usuário criado com sucesso')
      this.setState({
        nameInputValue: "",
        emailInputValue: "",
      })
    }).catch(error => {
      alert('Falha ao criar usuário, tente novamente')
      console.log(error.message)
    })
  }

  deleteUser = (userId) => {
    axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id", {
      headers: {
        Authorization: "bruno-mugnol-dumont"
      }
    }).then(response => {
      alert("Usuário deletado com sucesso")
    }).catch(error =>{
      alert("Erro ao tentar deletar usuário")
      console.log(error.message)
    })
  }

  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "bruno-mugnol-dumont"
      }
    }).then(response => {
      this.setState({ usersArray: response.data })
    }).catch(error => {
      console.log('Erro ao buscar lista de usuários')
      console.log(error.message)
    })
  }

  render() {
    let renderedContent = (this.state.pageNumber === 1 ?
      <SignUp
        nameInputValue={this.state.nameInputValue}
        onChangeNameValue={this.onChangeNameValue}

        emailInputValue={this.state.emailInputValue}
        onChangeEmailValue={this.onChangeEmailValue}

        onClickRegister={this.onClickRegister}
        onClickChangePage={this.onClickChangePage}
      />
      :
      <Users
        usersArray={this.state.usersArray}

        onClickDelete={this.onClickDelete}
        onClickChangePage={this.onClickChangePage}
      />
    )

    return (
      <div>
        {renderedContent}
      </div>
    );
  }
}

export default App;
