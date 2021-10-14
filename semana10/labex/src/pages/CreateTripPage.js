import React from "react";
import { useHistory } from "react-router";
import { useProtectedPage } from "../components/customHooks";

const CreateTripPage = () => {
    const history = useHistory()

    useProtectedPage();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div>
            <h1>Criar Viagem</h1>
                <input placeholder={"Título da viagem"}/>
                    <br/>
                <select defaultValue={""}>
                    <option value={""} disabled>Escolha um planeta</option>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Jupiter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Netuno</option>
                    <option>Plutão</option>
                </select>
                    <br/>
                <input type={"date"}/>
                    <br/>
                <input placeholder={"Descrição"}/>
                    <br/>
                <input placeholder={"Duração em dias"} type={"number"} />
                    <br/>
                <button onClick={goBack}>Voltar</button>
                <button>Criar</button>
        </div>
    )
}

export default CreateTripPage;