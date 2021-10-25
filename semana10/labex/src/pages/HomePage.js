import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import imagemAstronauta from "../IMG/astronauta.svg"

const DivHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Bebas Neue', cursive;
`
const Imagem = styled.img`
    height: 80vh;
    position: absolute;
    right: 0px;
    bottom: 0px;
`
const DivText = styled.div`
    position: absolute;
    font-size: 10vh;
`
const DivButtom = styled.div`
    display: flex;
    justify-content: space-around;
    height: 8vh;

    button {
        width: 7vw;
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
    }
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
            <Imagem src={imagemAstronauta} />
            <DivText>
                <h1>Home</h1>
                <DivButtom>
                    <button onClick={goToPageListTrip}>Lista de viagens</button>
                    <button onClick={goToPageLogin}>Área Adm</button>
                </DivButtom>
            </DivText>
        </DivHome>
    )
}

export default HomePage;