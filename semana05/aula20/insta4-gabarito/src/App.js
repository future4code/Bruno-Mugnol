import React from 'react';
import styled from 'styled-components';
import './App.css';
import Post from './components/Post/Post';

const GreyButton = styled.button`
  color: white;
  background-color: grey;
`

const FlexboxedDiv = styled.div`
  background-color: black;
  height: 50px;
  display: flex;
  justify-content: center;
`

class App extends React.Component {
  state = {
    arrayDePosts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'joao',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'amanda',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoArrayDePosts = [novoPost, ...this.state.arrayDePosts]
    this.setState({
      arrayDePosts: novoArrayDePosts,
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    })
  }

  onChangeNome = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

  onChangeFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {
    const listaDePosts = this.state.arrayDePosts.map((info,index) => {
      return (
        <Post key={index}
          // passando props:
          nomeUsuario={info.nomeUsuario}
          fotoUsuario={info.fotoUsuario}
          fotoPost={info.fotoPost}
        />
      )
    })

    return (
      <div>
        <FlexboxedDiv>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder={"Link para foto do usuário"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeFotoPost}
            placeholder={"Link para foto do post"}
          />
          <GreyButton onClick={this.adicionarPost}>Adicionar ao topo</GreyButton>
        </FlexboxedDiv>
        <div className={'app-container'}>
          {listaDePosts}
        </div>
      </div>
    );
  }
}

export default App;
