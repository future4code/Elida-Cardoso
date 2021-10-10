import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const DivMatches = styled.div`
    display: grid;
    align-items: center;
    width: 30vw;
    height: 80vh;
    min-height: 80vh;
    margin-top: 10px;
    overflow: auto;

    @media (max-width: 768px) {
            width: 98vw;
    }
`
const DivImagem = styled.div`
        min-width: 6vw;
        max-width: 6vw;
        height: 10vh;
        min-height: 10vh;

        @media (max-width: 768px) {
            min-width: 19vw;
            max-width: 19vw;
        }

        img {
            object-fit: cover;
            object-position: center top;
            max-height: 100%;
            min-height: 100%;
            min-width: 100%;
            max-width: 100%;
            border-radius: 360px;
        }
`
const DivPerfil = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 8px;

    p {
        font-size: 3vh;
        font-weight: bold;
        padding-left: 13px;
    }

    :hover{
        background-color: #f1f1f1;
        cursor: default;
    }
`

const MatchesPage = (props) => {
    const [profileMatch, setProfileMatch] = useState([])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:elida/matches")
        .then((res) => {
            setProfileMatch(res.data.matches)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    useEffect(() => {
        getMatches()
    }, [])

    const profileComponents = profileMatch.map((profile) => {
        return <DivPerfil key={profile.id}>
            <DivImagem>
                <img src={profile.photo} alt={"imagem perfil"}/>
            </DivImagem>
            <p>{profile.name}</p>
        </DivPerfil>
    })

    return (
        <DivMatches>
            {profileComponents}
        </DivMatches>
    )
}
export default MatchesPage