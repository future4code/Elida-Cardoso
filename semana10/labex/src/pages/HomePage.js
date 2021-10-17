import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const DivHome = styled.div`
    font-family: 'Bebas Neue', cursive;
    border: 2px solid red;
`


const HomePage = () => {
    const history = useHistory();

    const goToPageListTrip = () => {
        history.push("/trips/list")
    };

    const goToPageLogin = () => {
        history.push("/login")
    }
    return (
        <DivHome>
            <h1>Home</h1>
            <button onClick={goToPageListTrip}>Lista de viagens</button>
            <button onClick={goToPageLogin}>Área Adm</button>
        </DivHome>
    )
}

export default HomePage;