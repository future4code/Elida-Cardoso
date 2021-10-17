import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../constants/urls";
import useForm from "../hooks/useForm";
import { useGetTrips } from "../hooks/useGetTrips";

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
        <div>
            <h1>Fórmulario de Aplicação</h1>
                <form onSubmit={submitNewApply}>
                    <select defaultValue={""} onChange={onChangeTrip}>
                        <option value={""} disabled>Escolha um destino</option>
                        {tripsOptions}
                    </select>
                    <input 
                    name={"name"}
                    value={form.name}
                    placeholder={"Digite seu nome"}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                    />
                    <input 
                    name={"age"}
                    value={form.age}
                    placeholder={"Digite sua idade"} 
                    type={"number"}
                    onChange={onChange}
                    min={18}
                    required
                    />
                    <input 
                    name={"applicationText"}
                    value={form.applicationText}
                    placeholder={"Texto de Candidatura"}
                    onChange={onChange}
                    required
                    />
                    <input 
                    name={"profession"}
                    value={form.profession}
                    placeholder={"Profissão"}
                    onChange={onChange}
                    required
                    />
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
                <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default ApplicationFormPage;