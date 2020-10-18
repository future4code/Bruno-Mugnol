import React, { Component } from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorInputComentario: "",
		arrayDeComentariosDaSecao: ['oi']
	}

	onChangeComentario = (event) => {
		this.setState({ valorInputComentario: event.target.value })
	}




	render() {
		const wtf = () => {
			console.log(this.props.comentariosEnviados())
			const novoArrayDeComentariosDaSecao = this.props.comentariosEnviados()
			console.log(novoArrayDeComentariosDaSecao)
			this.setState({
				arrayDeComentariosDaSecao: novoArrayDeComentariosDaSecao
			})
		}
		
		const listaDeComentarios = this.state.arrayDeComentariosDaSecao.map((comentario) => {
			console.log(comentario)
			console.log(this.state.arrayDeComentariosDaSecao)
			return <li>{comentario}</li>
		})

		

		return (
			<div>
				<div className={'comment-container'}>
					<input
						className={'input-comentario'}
						placeholder={'Comentário'}
						value={this.state.valorInputComentario}
						onChange={this.onChangeComentario}
					/>

					<button onClick={() => {
						this.props.aoEnviar(this.state.valorInputComentario);

						wtf()
					}}>Enviar</button>

					{listaDeComentarios}
				</div>
			</div>
		)
	}
}
