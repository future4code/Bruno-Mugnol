import React, { Component } from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorInputComentario: "",
	}

	onChangeComentario = (event) => {
		this.setState({ valorInputComentario: event.target.value })
	}

	render() {
		const listaDeComentarios = this.props.comentariosEnviados.map((comentario,index) => {
			return <li key={index + comentario} >{comentario}</li>
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
					}}>Enviar</button>
					<div>
						
					</div>
				</div>
				{listaDeComentarios}
			</div>
		)
	}
}
