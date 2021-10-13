import React from "react";
import { useHistory } from "react-router";

const ApplicationFormPage = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div>
            <h1>Fórmulario de Aplicação</h1>
                <select>
                    <option>Escolha uma opção</option>
                    <option>Opção 1</option>
                    <option>Opção 2</option>
                    <option>Opção 3</option>
                    <option>Opção 4</option>
                </select>
                    <br/>
                <input placeholder={"Digite seu nome"}/>
                    <br/>
                <input placeholder={"Digite sua idade"} type={"number"}/>
                    <br/>
                <input placeholder={"Texto de Candidatura"}/>
                    <br/>
                <input placeholder={"Profissão"}/>
                    <br/>
                <select>
                    <option>Escolha um pais</option>
                    <option>Opção 1</option>
                    <option>Opção 2</option>
                    <option>Opção 3</option>
                    <option>Opção 4</option>
                </select>
                    <br/>
                <button onClick={goBack}>Voltar</button>
                <button>Enviar</button>
        </div>
    )
}

export default ApplicationFormPage;