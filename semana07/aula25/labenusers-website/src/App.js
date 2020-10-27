import React from 'react';
import axios from 'axios';

import SignUp from './components/SignUp'
import Users from './components/Users'
import Details from './components/Details'

class App extends React.Component {
  state = {
    pageNumber: 1,
    usersArray: [],
    userDetails: "",
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
      case 3:
        this.setState({ pageNumber: 2 })
        break
      default:
        this.setState({ pageNumber: 1 })
        break
    }
  }

  onClickDetails = (userId) => {
    this.getUserById(userId)
    this.setState({ pageNumber: 3 })
  }

  onClickDelete = (userId) => {
    if (window.confirm("Tem certeza que deseja deletar?")) {
      this.deleteUser(userId)
      this.setState({ pageNumber: 2 })
    } else {
      alert("Deleção cancelada")
    }
  }

  onClickEdit = (userId) => {
    this.editUser(userId)
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

  editUser = (userId) => {
    const body = {
      name: this.state.nameInputValue,
      email: this.state.emailInputValue
    }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, body, {
      headers: {
        Authorization: "bruno-mugnol-dumont"
      }
    }).then(response => {
      alert('Usuário editado com sucesso')
      this.setState({
        nameInputValue: "",
        emailInputValue: "",
      })
      this.getUserById(userId)
    }).catch(error => {
      alert('Falha ao editar usuário, tente novamente')
      console.log(error.message)
    })
  }

  deleteUser = (userId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
      headers: {
        Authorization: "bruno-mugnol-dumont"
      }
    }).then(response => {
      alert("Usuário deletado com sucesso")
    }).catch(error => {
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

  getUserById = (userId) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
      headers: {
        Authorization: "bruno-mugnol-dumont"
      }
    }).then(response => {
      this.setState({ userDetails: response.data })
    }).catch(error => {
      alert("Erro ao buscar detalhes do usuário")
      console.log(error.message)
    })
  }

  render() {
    const checksContent = () => {
      switch (this.state.pageNumber) {
        case 1:
          return (
            <SignUp
              nameInputValue={this.state.nameInputValue}
              onChangeNameValue={this.onChangeNameValue}

              emailInputValue={this.state.emailInputValue}
              onChangeEmailValue={this.onChangeEmailValue}

              onClickRegister={this.onClickRegister}
              onClickChangePage={this.onClickChangePage}
            />)
        case 2:
          return (
            <Users
              usersArray={this.state.usersArray}

              onClickDetails={this.onClickDetails}
              onClickDelete={this.onClickDelete}
              onClickChangePage={this.onClickChangePage}
            />)
        case 3:
          return (
            <Details
              userDetails={this.state.userDetails}

              nameInputValue={this.state.nameInputValue}
              onChangeNameValue={this.onChangeNameValue}

              emailInputValue={this.state.emailInputValue}
              onChangeEmailValue={this.onChangeEmailValue}

              onClickDelete={this.onClickDelete}
              onClickChangePage={this.onClickChangePage}
              onClickEdit={this.onClickEdit}
            />)
        default:
          return <p>Error</p>
      }
    }

    let renderedContent = checksContent()

    return (
      <div>
        {renderedContent}
      </div>
    );
  }
}

export default App;
