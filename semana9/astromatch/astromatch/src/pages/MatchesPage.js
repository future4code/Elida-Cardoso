import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const DivMatches = styled.div`
    display: grid;

    img{
        width: 10vw;
        border-radius: 360px;
        object-fit: contain;
    }
`
const DivImagem = styled.div`
        /* width: 5vw;
        height: 2vh;
        border-radius: 360px; */
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
        return <div key={profile.id}>
            <DivImagem>
                <img src={profile.photo} alt={"imagem perfil"}/>
            </DivImagem>
            <p>{profile.name}</p>
        </div>
    })

    return (
        <DivMatches>
            {profileComponents}
        </DivMatches>
    )
}
export default MatchesPage