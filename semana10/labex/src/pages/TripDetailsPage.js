import React, { useState } from "react";
import axios from "axios"
import { useHistory, useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { BASE_URL } from "../constants/urls";
import { useProtectedPage } from "../hooks/useProtectedPage"

const TripDetailsPage = () => {
    const history = useHistory();
    useProtectedPage();

    const { id } = useParams();
    const [tripData, setTripData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getTripDetails = () => {
        axios.get(`${BASE_URL}/trip/${id}`, {headers: {auth: localStorage.getItem("token")}})
        .then((response) => {
            setIsLoading(false)
            setTripData(response.data.trip)
        })
        .catch((error) => {
            setIsLoading(false)
            alert(error.response.data.message)
        });
    };

    const decideCandidate = (idCandidate, result) => {
        const body = {
            approve: result
        }

        axios.put(`${BASE_URL}/trips/${id}/candidates/${idCandidate}/decide`, body,
                    {headers: 
                        {auth: localStorage.getItem("token")}})
        .then((response) => {
            alert(response.data.message)
            getTripDetails();
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    };

    useEffect(() => {
        getTripDetails();
    }, [])

    const goBack = () => {
        history.goBack();
    };

    const getCandidates = tripData && tripData.candidates && tripData.candidates.map((candidate) => {
        return (
            <div key={candidate.id}>
                <p>Nome: {candidate.name}</p>
                <p>Idade: {candidate.age}</p>
                <p>Profissão: {candidate.profession}</p>
                <p>País: {candidate.country}</p>
                <p>Texto da Aplicação: {candidate.applicationText}</p>
                <button onClick={() => decideCandidate(candidate.id, true)}>Aprovar</button>
                <button onClick={() => decideCandidate(candidate.id, false)}>Recusar</button>
            </div>
        )
    })

    const getApprovedCandidates = tripData && tripData.approved && tripData.approved.map((candidate) => {
        return (
            <div key={candidate.id}>
                <p>Id do candidato: {candidate.id}</p>
                <p>Nome: {candidate.name}</p>
                <p>Idade: {candidate.age}</p>
            </div>
        )
    })

    return (
        <div>
            <h1>Detalhes Viagens</h1>
                <button onClick={goBack}>Voltar</button>
                {isLoading ? <p>Carregando informações...</p> : <h2>{tripData.name}</h2>}
                <p>Quando: {tripData.date}</p>
                <p>Destino: {tripData.planet}</p>
                <p>Duração: {tripData.durationInDays}</p>
                <p>Descrição: {tripData.description}</p>
            <h2>Candidatos pendentes</h2>
                {getCandidates && getCandidates.length > 0 ? getCandidates : <p>Não há candidatos pendentes</p>}
            <h3>Candidatos Aprovados</h3>
                {getApprovedCandidates && getApprovedCandidates.length > 0 ? getApprovedCandidates : <p>Nenhum candidato aprovado</p>}
        </div>
    )
}

export default TripDetailsPage;