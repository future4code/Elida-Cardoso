import React, { useState } from "react"
import axios from "axios"

import Header from "./pages/Header"
import MatchesPage from "./pages/MatchesPage"
import HomePage from "./pages/HomePage"

import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
import { background } from "@chakra-ui/styled-system"

const GlobalStyle = createGlobalStyle`
  
  * {
    /* border: 2px solid red; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
`;

const DivMain = styled.div`
  background-color: #F1F1F1;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`
const DivChildren = styled.div`
  background-color: #FFFFFF;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  width: 30vw;
  height: 96%;
  border-radius: 8px;

  display: grid;
  grid-template-rows: 8vh 1fr 8vh;
  align-items: center;
`

const App = () => {
  const [pages, setPages] = useState("home")

  const changePage = (pageName) => {
    setPages(pageName)
  }

  const choosePage = () => {
    switch (pages) {
      case "home":
        return <HomePage/>
      case "matches":
        return <MatchesPage/>
      default:
        return <HomePage />
    }
  }

  const clear = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:elida/clear")
    .then((res) => {
      alert("Cache limpo com sucesso!")
      setPages("home")
    })
    .catch((err) => {
      alert("algo deu errado :(", err.response.data)
    })
  }

  return (
    <DivMain>
      <DivChildren>
        <GlobalStyle/>
        <Header changePage={changePage}/>
        {choosePage()}
        <button onClick={() => {clear()}}>limpar</button>
      </DivChildren>
    </DivMain>
  );
}

export default App;
