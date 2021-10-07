import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"

const Imagem = styled.img`
width: 300px;
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
        <div>
            <Imagem src={profile.photo} alt="imagem do perfil"/>
            <p>{profile.name}</p>
            <p>{profile.age}</p>
            <p>{profile.bio}</p>
            <button onClick={() => {matchChoice(true)}}>sim</button>
            <button onClick={() => {matchChoice(false)}}>não</button>
        </div>
    )
}
export default HomePage