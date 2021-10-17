import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../constants/urls";
import useForm from "../hooks/useForm";
import { useGetTrips } from "../hooks/useGetTrips";
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
`

const ApplicationFormPage = () => {
    const [tripId, setTripId] = useState("");
    const { form, onChange, cleanFields } = useForm({
            name: "",
            age: "",
            applicationText: "",
            profession: "",
            country: ""
        }
    );
    const [trips] = useGetTrips([]);
    const history = useHistory();

    const submitNewApply = (event) => {
        event.preventDefault();
        creatNewApply(tripId);
        cleanFields();
        console.log("clicou/enviou")
    }

    const creatNewApply = (id) => {
        axios.post(`${BASE_URL}/trips/${id}/apply`, form)
        .then((response) => {
            alert("Formulário enviado com sucesso!");
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    };

    const onChangeTrip = (e) => {
        setTripId(e.target.value)
    }

    const goBack = () => {
        history.goBack();
    };

    const tripsOptions = trips && trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
    });

    return (
        <DivForm>
            <h1>Fórmulario de Aplicação</h1>
                <DivFormChildren>
                <form onSubmit={submitNewApply}>
                    <select defaultValue={""} onChange={onChangeTrip}>
                        <option value={""} disabled>Escolha um destino</option>
                        {tripsOptions}
                    </select>
                    <br/>
                    <input 
                    name={"name"}
                    value={form.name}
                    placeholder={"Digite seu nome"}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                    />
                    <br/>
                    <input 
                    name={"age"}
                    value={form.age}
                    placeholder={"Digite sua idade"} 
                    type={"number"}
                    onChange={onChange}
                    min={18}
                    required
                    />
                    <br/>
                    <input 
                    name={"applicationText"}
                    value={form.applicationText}
                    placeholder={"Texto de Candidatura"}
                    onChange={onChange}
                    required
                    />
                    <br/>
                    <input 
                    name={"profession"}
                    value={form.profession}
                    placeholder={"Profissão"}
                    onChange={onChange}
                    required
                    />
                    <br/>
                    <select
                    name={"country"}
                    onChange={onChange}
                    defaultValue={""}
                    required
                    >
                        <option value={""} disabled>Escolha um pais</option>
                        <option value={"Brasil"}>Brasil</option>
                        <option value={"Estados Unidos"}>Estados Unidos</option>
                        <option value={"França"}>França</option>
                        <option value={"Japão"}>Japão</option>
                    </select>
                        <br/>
                    <button type={"submit"}>Enviar</button>
                </form>
                </DivFormChildren>
                <button onClick={goBack}>Voltar</button>
        </DivForm>
    )
}

export default ApplicationFormPage;