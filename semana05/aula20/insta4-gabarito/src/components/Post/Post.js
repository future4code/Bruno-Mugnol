import React from 'react'
import styled from 'styled-components'
import '../SecaoComentario/SecaoComentario.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const PostHeader = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`
const PostFooter = styled.footer`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`
const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    arrayDeComentarios: ['oi']
  }

  onClickCurtida = () => {
    let novoNumeroCurtidas

    if (this.state.curtido) {
      novoNumeroCurtidas = this.state.numeroCurtidas - 1
    } else {
      novoNumeroCurtidas = this.state.numeroCurtidas + 1
    }

    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: novoNumeroCurtidas
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = (comentario) => {
    const novoComentario = comentario
    const novoArrayDeComentarios = [...this.state.arrayDeComentarios, novoComentario]
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      arrayDeComentarios: novoArrayDeComentarios
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    const listaDeComentarios = this.state.arrayDeComentarios.map((comentario) => {
      return <li>{comentario}</li>
    })

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </PostFooter>
        {componenteComentario}
        <div>{listaDeComentarios}</div>
      </PostContainer>
    )
  }
}

export default Post
