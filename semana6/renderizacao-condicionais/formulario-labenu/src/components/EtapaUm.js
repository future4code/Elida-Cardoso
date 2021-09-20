import React from "react";

export default class EtapaUm extends React.Component {

    render() {

        return (
            <div>
                <h1>ETAPA 1 - Dados Gerais</h1>
                <h3>1. Qual seu nome?</h3>
                <input placeholder={"Digite aqui seu nome!"}  />

                <h3>2. Qual sua idade?</h3>
                <input placeholder={"Digite aqui sua idade!"} />

                <h3>3. Qual seu email?</h3>
                <input placeholder={"Digite aqui seu email!"} />

                <h3>4. Qual sua escolaridade?</h3>
                <select name="Escolaridade">
                    <option value="medio-incompleto">Ensino Médio Incompleto</option>
                    <option value="medio-completo">Ensino Médio Completo</option>
                    <option value="superior-incompleto">Ensino Superior Incompleto</option>
                    <option value="superior-completo">Ensino Superior Completo</option>
                </select>
            </div>
        )
    }
}