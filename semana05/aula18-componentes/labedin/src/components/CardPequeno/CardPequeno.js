import React from 'react';

function CardPequeno(props) {
    return (
        <div className="smallcard-container">            
            <div>
                <h4>E-mail</h4>
                <p>{ props.emailfalso }</p>
            </div>
            <div>
                <h4>Endereço</h4>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;