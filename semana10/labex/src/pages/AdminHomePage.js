import React from "react";
import { useHistory } from "react-router";
import { useProtectedPage } from "../components/customHooks";
import styled from "styled-components";


const DivTrip = styled.div`
cursor: pointer;
border: 2px solid black;
margin: 5px 0;
`

const AdminHomePage = () => {
    const history = useHistory();

    useProtectedPage();

    const goToCreateTrip = () => {
        history.push("/admin/trips/create");
    };

    const goToTripDetailsPage = (id) => {
        history.push(`/admin/trips/${id}`);
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <div>
            <h1>Painel Adm</h1>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToCreateTrip}>Criar Viagem</button>
                <button>Logout</button>
            <DivTrip>
                <h4 onClick={goToTripDetailsPage}>Viagem Pra Algum Lugar</h4>
            </DivTrip>
        </div>
    )
}

export default AdminHomePage;