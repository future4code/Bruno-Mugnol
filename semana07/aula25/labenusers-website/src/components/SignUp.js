import React from 'react';

class SignUp extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <h1>SignUp</h1>
                    <input
                        placeholder="Nome"
                        value={this.props.nameInputValue}
                        onChange={this.props.onChangeNameValue}
                    />
                    <input
                        placeholder="E-mail"
                        value={this.props.emailInputValue}
                        onChange={this.props.onChangeEmailValue}
                    />
                    <button onClick={this.props.onClickRegister}>Cadastrar</button>
                </div>
                <br />
                <button onClick={this.props.onClickChangePage}>Ver lista de usuários</button>
            </div>
        )
    }
}

export default SignUp