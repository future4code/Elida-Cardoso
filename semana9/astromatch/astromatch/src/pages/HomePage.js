import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"

const DivHome = styled.div`
    border: 2px solid red;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DivImagem = styled.div`
    border: 2px solid red;

    position: relative;
    border-radius: 5px;
    overflow: hidden;
    height: 64vh;
    width: 28vw;
    max-width: 28vw;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`
const Imagem = styled.img`
    max-height: 100%;
    width: 100%;
    max-width: 100%;
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
            <p><strong>{profile.name}</strong>, {profile.age}</p>
            <p>{profile.bio}</p>
            <div>
                <button onClick={() => {matchChoice(true)}}>sim</button>
                <button onClick={() => {matchChoice(false)}}>não</button>
            </div>
        </DivHome>
    )
}
export default HomePage