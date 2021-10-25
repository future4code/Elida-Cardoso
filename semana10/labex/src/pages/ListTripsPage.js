import React from "react";
import { useHistory } from "react-router";
import { useGetTrips } from "../hooks/useGetTrips"
import styled from "styled-components";

const DivTrips = styled.div`
    display: grid;
    max-width: 100vw;
    height: 100vh;
    font-family: 'Bebas Neue', cursive;
`
const DivHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 4px;
    padding: 8px;
`
const Buttons = styled.button`
        width: 11vw;
        height: 8vh;
        border: none;
        background-color: #FF865E;
        font-family: 'Georama', sans-serif;
        font-weight: bold;
        font-size: 18px;
        padding: 3px;
        cursor: pointer;

        :hover{
            background-color: #FC997B;
        }

        :active{
            transform: scale(0.8);
        }
`
const DivTripsCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 13px;
    grid-row-gap: 7px;
    margin: 0 8px;

    div {
        font-size: 20px;
        border: 1px solid gray;
        padding: 4px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
`


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
        <DivTrips>
            <DivHeader>
                <h1>Lista de Viagens</h1>
                <Buttons onClick={goBack}>Voltar</Buttons>
                <Buttons onClick={goToApplicationPage}>Aplicação de viagem</Buttons>
            </DivHeader>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && data && data.length === 0 && (
                <p>Não foi encontrado nenhum resultado </p>
            )}
            {!isLoading && error && <p>Ocorreu um erro x_x</p>}
            <DivTripsCard>
            {data && data.map((trip) => {
                    return (
                    <div key={trip.id}>
                        <h3>{trip.name}</h3>
                        <p>{trip.description}</p>
                        <p>Destino: {trip.planet}</p>
                        <p>Data: {trip.date.split("-").reverse().join("-")}</p>
                        <p>Duração: {trip.durationInDays} dias</p>
                    </div>)
            })}
            </DivTripsCard>
        </DivTrips>
    )
}

export default ListTripsPage;