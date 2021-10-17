import React from "react";
import { useHistory, useParams } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage"
import styled from "styled-components";
import { useGetTrips } from "../hooks/useGetTrips";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";
import { BASE_URL } from "../constants/urls";


const DivTrip = styled.div`
cursor: pointer;
border: 2px solid black;
margin: 5px 0;
`

const AdminHomePage = () => {
    const [data, isLoading, error] = useGetTrips([])
    const history = useHistory();

    useProtectedPage();

    const deleteTrip = (id) => {
        axios.delete(`${BASE_URL}/trips/${id}`, {headers: {auth: localStorage.getItem("token")}})
        .then((response) => {
            console.log("deu certo", response.data)
        })
        .catch((error) => {
            alert(error.response.data.message)
            console.log("deu errado", error.response.data)
        })
    }

    const goToHomePage = () => {
        history.push("/");
    }

    const goToCreateTrip = () => {
        history.push("/admin/trips/create");
    };

    const goToTripDetailsPage = (id) => {
        history.push(`/admin/trips/${id}`);
    };

    const goBack = () => {
        history.goBack();
    };

    const logout = () => {
        localStorage.removeItem("token");
        goToHomePage()
    }

    return (
        <div>
            <h1>Painel Adm</h1>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToCreateTrip}>Criar Viagem</button>
                <button onClick={logout}>Logout</button>
            <h3>Lista de Viagens</h3>
                {isLoading && <p>Carregando...</p>}
                {!isLoading && error && <p>Algo deu errado x_x</p>}
                {!isLoading && data && data.length === 0 && (
                <p>Não foi encontrado nenhum resultado</p>
                )}
                {data && data.map((trip) => {
                    return (
                        <DivTrip key={trip.id} id={trip.id}>
                            <div onClick={() => goToTripDetailsPage(trip.id)}>
                                <p>{trip.name}</p>
                            </div>
                            <div>
                                <button onClick={deleteTrip}>X</button>
                            </div>
                        </DivTrip>
                    )
                })}
        </div>
    )
}

export default AdminHomePage;