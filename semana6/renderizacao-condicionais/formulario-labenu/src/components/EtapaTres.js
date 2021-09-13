import React from "react";

export default class EtapaTres extends React.Component {

    render() {

        return (
            <div>
                <h1>ETAPA 3 - Informações Gerais de Ensino</h1>
                <h3>7. Por que você não terminou um curso de graduação?</h3>
                <input placeholder={"Digite aqui seu curso"}  />

                <h3>8. Você fez algum curso complementar?</h3>
                <select name="Curso-Complementar">
                    <option value="nenhum">Nenhum</option>
                    <option value="curso-tecnico">Curso Técnico</option>
                    <option value="curso-ingles">Curso de Inglês</option>
                </select>
            </div>
        )
    }
}