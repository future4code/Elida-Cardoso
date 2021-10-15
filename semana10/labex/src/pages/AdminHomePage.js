import React from "react";
import { useHistory } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage"
import styled from "styled-components";
import { useGetTrips } from "../hooks/useGetTrips";


const DivTrip = styled.div`
cursor: pointer;
border: 2px solid black;
margin: 5px 0;
`

const AdminHomePage = () => {
    const [data, isLoading, error] = useGetTrips([])
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
            <h3>Lista de Viagens</h3>
                {isLoading && <p>Carregando...</p>}
                {!isLoading && error && <p>Algo deu errado x_x</p>}
                {!isLoading && data && data.length === 0 && (
                <p>Não foi encontrado nenhum resultado</p>
                )}
                {data && data.map((trip) => {
                    return (
                        <DivTrip key={trip.id} onClick={() => goToTripDetailsPage(trip.id)} id={trip.id}>
                            {trip.name}
                            <button>X</button>
                        </DivTrip>
                    )
                })}
        </div>
    )
}

export default AdminHomePage;