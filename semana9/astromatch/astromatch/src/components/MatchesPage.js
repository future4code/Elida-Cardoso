import React, {useState, useEffect} from "react";
import axios from "axios";

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
            <img src={profile.photo} alt={"imagem perfil"}/>
            <p>{profile.name}</p>
        </div>
    })

    return (
        <div>
            {profileComponents}
        </div>
    )
}
export default MatchesPage