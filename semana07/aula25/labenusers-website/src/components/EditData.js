import React from 'react';

class EditData extends React.Component {

    render() {
        return (
            <div>
                <input
                    placeholder="Novo nome"
                    value={this.props.nameInputValue}
                    onChange={this.props.onChangeNameValue}
                />
                <input
                    placeholder="Novo e-mail"
                    value={this.props.emailInputValue}
                    onChange={this.props.onChangeEmailValue}
                />
                <button onClick={()=>{
                    this.props.onClickEdit(this.props.userDetails.id)
                    this.props.onClickTransformButton()
                    }}>Salvar</button>
            </div>
        )
    }
}

export default EditData