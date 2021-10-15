import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { useGetTrips } from "../hooks/useGetTrips"
import { useEffect } from "react/cjs/react.development";
import { BASE_URL } from "../constants/urls";

const ListTripsPage = () => {
    const [data, isLoading, error] = useGetTrips([])
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
            {isLoading && <p>Carregando...</p>}
            {!isLoading && data && data.length === 0 && (
                <p>Não foi encontrado nenhum resultado </p>
            )}
            {!isLoading && error && <p>Ocorreu um erro x_x</p>}
            {data && data.map((trip) => {
                    return (
                    <div key={trip.id}>
                        <h3>{trip.name}</h3>
                        <p>{trip.description}</p>
                        <p>Destino: {trip.planet}</p>
                        <p>{trip.date.split("-").reverse().join("-")}</p>
                        <p>{trip.durationInDays} dias</p>
                    </div>)
            })}
        </div>
    )
}

export default ListTripsPage;