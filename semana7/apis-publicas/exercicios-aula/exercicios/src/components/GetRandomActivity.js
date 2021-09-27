import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class GetRandomActivity extends React.Component {
    state = {
        activity: [],
    }

    getRandomActivity = () => {
        axios.get("https://www.boredapi.com/api/activity/")
        .then((res) => {
            this.setState({activity: res.data})
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    render () {
        const {activity, type, participants, price} = this.state.activity
        return (
            <div>
                <h1>Tá com tédio??</h1>
                <h2>Não sabe o que fazer???</h2>
                <button onClick={this.getRandomActivity}>Clique aqui e receba algo aleatório para fazer!</button>
                <h4>{activity}</h4>
                <p>Tipo: {type}</p>
                <p>Quantas pessoas podem participar: {participants}</p>
                <p>Preço médio: {price}</p>
            </div>
        )
    }
}