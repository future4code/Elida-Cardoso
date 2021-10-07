import React, { useState } from "react"
import Header from "./components/Header"
import MatchesPage from "./components/MatchesPage"
import HomePage from "./components/HomePage"
import axios from "axios"

const App = () => {
  const [pages, setPages] = useState("home")

  const changePage = (pageName) => {
    setPages(pageName)
  }

  const choosePage = () => {
    switch (pages) {
      case "home":
        return <HomePage />
      case "matches":
        return <MatchesPage />
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
    <div>
      <Header changePage={changePage}/>
      <hr/>
      {choosePage()}
      <hr/>
      <button onClick={() => {clear()}}>limpar</button>
    </div>
  );
}

export default App;
