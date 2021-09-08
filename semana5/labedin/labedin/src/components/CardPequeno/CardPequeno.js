import React from 'react';

function CardPequeno(props) {
    return (
        <div className="card-pequeno">
            <img src={props.imagem} className="imagem-card-p"/>
            <div>
                <p><strong>{props.indicador}:</strong></p>
                <p>{props.conteudo}</p>
            </div>
        </div>
    )
}

export default CardPequeno;