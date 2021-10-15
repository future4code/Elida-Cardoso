import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../constants/urls";
import { useProtectedPage } from "../hooks/useProtectedPage"
import useForm from "../hooks/useForm";

const LoginPage = () => {
    useProtectedPage();
    const history = useHistory();

    const {form, onChange, cleanFields} = useForm({
        email: "",
        password: ""
    });

    const login = (event) => {
        event.preventDefault();
        requestLogin();
        cleanFields();
    };

    const requestLogin = () => {
        axios.post(`${BASE_URL}/login`, form)
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
            <form onSubmit={login}>
                <input
                    name={"email"}
                    value={form.email}
                    placeholder={"Digite seu email"}
                    type={"email"}
                    onChange={onChange}
                    required
                />
                <br/>
                <input
                    name={"password"}
                    value={form.password}
                    placeholder={"senha"}
                    type={"password"}
                    onChange={onChange}
                    pattern={"^.{3,}"}
                    title={"A senha deve ter no mínimo 3 caracteres"}
                    required
                />
                <button>Enviar</button>
            </form>
            <div>
                <button onClick={goBack}>Voltar</button>
            </div>
        </div>
    )
}

export default LoginPage;