import React from "react";
import { useHistory } from "react-router";

const TripDetailsPage = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div>
            <h1>Detalhes Viagens</h1>
                <button onClick={goBack}>Voltar</button>
            <h2>Candidatos pendentes</h2>
                <p>info info info</p>
                <button>Aprovar</button>
                <button>Recusar</button>
            <h3>Candidatos Aprovados</h3>
                <p>infooooos</p>
        </div>
    )
}

export default TripDetailsPage;