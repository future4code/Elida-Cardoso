import React from "react";
import { useHistory } from "react-router";


const HomePage = () => {
    const history = useHistory();

    const goToPageListTrip = () => {
        history.push("/trips/list")
    };

    const goToPageLogin = () => {
        history.push("/login")
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={goToPageListTrip}>Lista de viagens</button>
            <button onClick={goToPageLogin}>Área Adm</button>
        </div>
    )
}

export default HomePage;