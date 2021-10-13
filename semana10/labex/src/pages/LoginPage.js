import React from "react";
import { useHistory } from "react-router";

const LoginPage = () => {
    const history = useHistory();

    const goToAdmListTrip = () => {
        history.push("/admin/trips/list")
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <div>
            <h1>Login</h1>
            <input placeholder={"email"}/>
            <br/>
            <input placeholder={"senha"}/>
            <br/>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToAdmListTrip}>Enviar</button>
        </div>
    )
}

export default LoginPage;