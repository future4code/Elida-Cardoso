import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../constants/urls";
import { useProtectedPage } from "../components/customHooks";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useProtectedPage();

    const history = useHistory();

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        };

        axios.post(`${BASE_URL}/login`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            history.push("/admin/trips/list")
        }).catch((error) => {
            alert(error.response.data.message)
        })
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <div>
            <h1>Login</h1>
            <input
            placeholder={"email"}
            type={"email"}
            value={email}
            onChange={onChangeEmail}
            />
            <br/>
            <input
            placeholder={"senha"}
            type={"password"}
            value={password}
            onChange={onChangePassword}
            />
            <br/>
            <button onClick={goBack}>Voltar</button>
            <button onClick={onSubmitLogin}>Enviar</button>
        </div>
    )
}

export default LoginPage;