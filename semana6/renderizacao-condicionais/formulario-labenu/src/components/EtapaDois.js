import React from "react";

export default class EtapaDois extends React.Component {

    render() {

        return (
            <div>
                <h1>ETAPA 2 - Informações do Ensino Superior</h1>
                <h3>5. Qual curso?</h3>
                <input placeholder={"Digite aqui seu curso"}  />

                <h3>6. Qual a unidade de ensino?</h3>
                <input placeholder={"Digite aqui!"} />
            </div>
        )
    }
}