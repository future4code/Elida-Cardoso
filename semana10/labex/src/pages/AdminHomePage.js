import React from "react";
import { useHistory } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage"
import styled from "styled-components";
import { useGetTrips } from "../hooks/useGetTrips";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const DivAdmHome = styled.div`
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
const DivAdmCards = styled.div`
    display: grid;
    grid-column-gap: 13px;
    grid-row-gap: 7px;
    margin: 0 8px;

    div {
        font-size: 20px;
        border: 1px solid gray;
        padding: 4px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }

    button {
        background-color: red;
        color: white;
        width: 5vw;
    }
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
        <DivAdmHome>
            <DivHeader>
                <h1>Painel Adm</h1>
                    <Buttons onClick={goBack}>Voltar</Buttons>
                    <Buttons onClick={goToCreateTrip}>Criar Viagem</Buttons>
                    <Buttons onClick={logout}>Logout</Buttons>
            </DivHeader>
            <h3>Lista de Viagens</h3>
                {isLoading && <p>Carregando...</p>}
                {!isLoading && error && <p>Algo deu errado x_x</p>}
                {!isLoading && data && data.length === 0 && (
                <p>Não foi encontrado nenhum resultado</p>
                )}
                {data && data.map((trip) => {
                    return (
                        <DivAdmCards key={trip.id} id={trip.id}>
                            <div onClick={() => goToTripDetailsPage(trip.id)}>
                                <p>{trip.name}</p>
                                <button onClick={deleteTrip}>X</button>
                            </div>
                        </DivAdmCards>
                    )
                })}
        </DivAdmHome>
    )
}

export default AdminHomePage;