import React from "react";
import axios from "axios";
import {BASE_URL} from "../constants/urls"
import { useHistory } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage"
import useForm from "../hooks/useForm";
import styled from "styled-components";

const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Bebas Neue', cursive;

    button {
        width: 7vw;
        height: 4vh;
        border: none;
        background-color: #FF865E;
        font-family: 'Georama', sans-serif;
        font-weight: bold;
        font-size: 18px;
        padding: 3px;
        cursor: pointer;

        :hover{
            background-color: #FC997B;
        }

        :active{
            transform: scale(0.8);
        }
    }
`
const DivFormChildren = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 50vh;
`


const CreateTripPage = () => {
    const history = useHistory()
    useProtectedPage();

    const {form, onChange, cleanFields} = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    });

    const submitNewTrip = (event) => {
        event.preventDefault();
        createTrip();
        cleanFields();
    }

    const createTrip = () => {
        axios.post(`${BASE_URL}/trips`, form, {headers: {auth: localStorage.getItem("token")}})
        .then((response) => {
            alert("Viagem criada com sucesso!");
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }

    const goBack = () => {
        history.goBack();
    };

    return (
        <DivForm>
            <h1>Criar Viagem</h1>
                <DivFormChildren>
                <form onSubmit={submitNewTrip}>
                    <label>Título da viagem: </label>
                        <input 
                        name={"name"}
                        value={form.name}
                        placeholder={"Digite aqui o título"}
                        pattern={"^.{10,}"}
                        title={"O nome deve ter no mínimo 10 caracteres"}
                        onChange={onChange}
                        required
                        />
                        <br/>
                    <label>Destino: </label>
                        <select 
                        name={"planet"}
                        onChange={onChange}
                        defaultValue={""}
                        required>
                            <option value={""} disabled>Escolha um planeta</option>
                            <option value={"Mercúrio"}>Mercúrio</option>
                            <option value={"Vênus"}>Vênus</option>
                            <option value={"Terra"}>Terra</option>
                            <option value={"Marte"}>Marte</option>
                            <option value={"Jupiter"}>Jupiter</option>
                            <option value={"Saturno"}>Saturno</option>
                            <option value={"Urano"}>Urano</option>
                            <option value={"Netuno"}>Netuno</option>
                            <option value={"Plutão"}>Plutão</option>
                            <option value={"Outros"}>Outros</option>
                        </select>
                        <br/>
                    <label>Data: </label>
                        <input 
                        name={"date"}
                        value={form.date}
                        type={"date"}
                        //validação pra nao aceitar datas que já passaram 
                        min={new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + new Date().getDate()}
                        onChange={onChange}
                        required
                        />
                        <br/>
                    <label>Descrição: </label>
                        <input
                        name={"description"}
                        value={form.description}
                        placeholder={"Escreva aqui a descrição"}
                        onChange={onChange}
                        pattern={"^.{20,}"}
                        title={"Necessário descrição! Mínimo 20 caracteres"}
                        required/>
                        <br/>
                    <label>Duração da viagem: </label>
                        <input
                        name={"durationInDays"}
                        value={form.durationInDays}
                        type={"number"}
                        min={50}
                        placeholder={"Duração em dias"}
                        onChange={onChange}
                        required
                        />
                        <br/>
                        <button>Criar</button>
                </form>
                </DivFormChildren>
                <div>
                    <button onClick={goBack}>Voltar</button>
                    
                </div>
        </DivForm>
    )
}

export default CreateTripPage;