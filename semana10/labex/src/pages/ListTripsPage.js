import React from "react";
import { useHistory } from "react-router";

const ListTripsPage = () => {
    const history = useHistory();

    const goToApplicationPage = () => {
        history.push("/trips/application")
    };

    const goBack = () => {
        history.goBack()
    };

    return (
        <div>
            <h1>Lista de Viagens</h1>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToApplicationPage}>Aplicação de viagem</button>
        </div>
    )
}

export default ListTripsPage;