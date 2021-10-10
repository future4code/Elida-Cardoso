import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import coracao from "../IMG/favorite_border_black_24dp.svg"
import xis from "../IMG/close_black_24dp.svg"

const DivHome = styled.div`
    height: 87vh;
    min-height: 87vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DivImagem = styled.div`
    position: relative;
    top: -3vh;
    border-radius: 10px;
    max-height: 64vh;
    min-height: 64vh;
    max-width: 28vw;
    min-width: 28vw;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px;

    @media (max-width: 768px) {
            max-width: 93vw;
            min-width: 93vw;
        }
`
const Imagem = styled.img`
    object-fit: contain;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
`
const Texto = styled.div`
    position: absolute;
    bottom: 141px;
    height: 23vh;
    width: 28vw;
    border-radius: 10px;
    padding: 20px 6px;
    color: #f1f1f1;
    font-size: 20px;
    font-weight: bold;
    box-shadow: rgb(0 0 0 / 35%) 0px -200px 16px -80px inset;

    @media (max-width: 768px) {
            bottom: 149px;
            width: 93vw;
        }
`
const TextoNome = styled.strong`
font-size: 30px;
`
const DivSimNao = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20vw;

    @media (max-width: 768px) {
            width: 65vw;
        }
`
const BotaoCore = styled.img`
        height: 10vh;
        height: 10vh;
        width: 6vw;
        cursor: pointer;
        border-radius: 360px;
        border: 4px solid black;

        @media (max-width: 768px) {
            width: 18vw;
        }
        
        :hover{
            transform: translateX(10%) rotate(10deg);
            transition: all 0.3s ease-out 50ms;
            background-color: #FB5D9A;
        }

        :active{
            transform: scale(0.8);
        }
`
const BotaoNao = styled.img`
        height: 10vh;
        height: 10vh;
        width: 6vw;
        cursor: pointer;
        border-radius: 360px;
        border: 4px solid black;

        @media (max-width: 768px) {
            width: 18vw;
        }
        
        :hover{
            transform: translateX(-10%) rotate(-10deg);
            transition: all 0.3s ease-out 50ms;
            background-color: #F9082A;
        }

        :active{
            transform: scale(0.8);
        }
`

const HomePage = (props) => {
    const [profile, setProfile] = useState({})
    const [idProfile, setIdProfile] = useState("")
    const [choice, setChoice] = useState(true)

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:elida/person"
    const urlChoose = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:elida/choose-person"
    const body = {
        "id": idProfile,
	    "choice": choice
    }

    const getProfile = () => {
        axios.get(url)
        .then((res) => {
            setProfile(res.data.profile)
            setIdProfile(res.data.profile.id)
        })
        .catch((err) => {
            console.log(err.response.data)
            alert("Algo deu errado :(", err.response.data)
        })
    }

    const choosePerson = () => {
        axios.post(urlChoose, body)
        .then((res) => {
            getProfile()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    const matchChoice = (choice) => {
        setChoice(choice)
        choosePerson()
    }

    useEffect(() => {
        getProfile()
    }, [])


    return (
        <DivHome>
            <DivImagem>
                <Imagem src={profile.photo} alt="imagem do perfil"/>
            </DivImagem>
            <Texto> 
                <p><TextoNome>{profile.name}</TextoNome>, {profile.age}</p>
                <p>{profile.bio}</p>
            </Texto>
            <DivSimNao>
                <BotaoNao src={xis} onClick={() => {matchChoice(false)}}/>
                <BotaoCore src={coracao} onClick={() => {matchChoice(true)}}/>
            </DivSimNao>
        </DivHome>
    )
}
export default HomePage