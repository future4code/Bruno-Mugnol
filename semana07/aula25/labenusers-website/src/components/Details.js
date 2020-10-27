import React from 'react';
import EditData from './EditData'

class Details extends React.Component {
    state = {
        edit: false
    }

    onClickTransformButton = () => {
        const currentEdit = this.state.edit
        this.setState({ edit: !currentEdit })
    }

    render() {
        const renderedDetails = (
            <div>
                <h2>Nome:</h2>
                <p>{this.props.userDetails.name}</p>
                <h2>Email:</h2>
                <p>{this.props.userDetails.email}</p>
            </div>
        )

        const renderButton = () => {
            if (!this.state.edit) {
                return <button onClick={this.onClickTransformButton}>Editar dados</button>
            } else {
                return (
                    <EditData
                        userDetails={this.props.userDetails}

                        nameInputValue={this.props.nameInputValue}
                        onChangeNameValue={this.props.onChangeNameValue}

                        emailInputValue={this.props.emailInputValue}
                        onChangeEmailValue={this.props.onChangeEmailValue}

                        onClickEdit={this.props.onClickEdit}
                        onClickTransformButton={this.onClickTransformButton}
                    />
                )
            }
        }

        return (
            <div>
                <button onClick={this.props.onClickChangePage}>Voltar</button>
                <div>
                    {renderedDetails}
                </div>
                <button onClick={() => this.props.onClickDelete(this.props.userDetails.id)}>Deletar usuário</button>
                <br />
                {renderButton()}
            </div>
        )
    }
}

export default Details