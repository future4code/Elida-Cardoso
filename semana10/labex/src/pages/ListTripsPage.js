import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { BASE_URL } from "../constants/urls";

const ListTripsPage = () => {
    const [trips, setTrips] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true);

        axios.get(`${BASE_URL}/trips`)
            .then((response) => {
                setTrips(response.data.trips);
                setIsLoading(false);
            })
            .catch((error) => {
                alert("Algo deu errado :(")
                setIsLoading(false)
            })
        }, []);

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
            {!isLoading && trips && trips.length === 0 && (
                <p>Não foi encontrado nenhum resultado </p>
            )}
            {trips && trips.map((trip) => {
                    return (
                    <div key={trip.id}>
                        <h3>{trip.name}</h3>
                        <p>{trip.description}</p>
                        <p>Destino: {trip.planet}</p>
                        <p>{trip.date}</p>
                        <p>{trip.durationInDays} dias</p>
                    </div>)
            })}
        </div>
    )
}

export default ListTripsPage;