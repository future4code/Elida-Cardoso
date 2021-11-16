import React, {useState, useEffect} from "react"
import axios from "axios"
import PokeCard from "./components/PokeCard"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: #f1f1f1;
}
` 
const DivMain = styled.div`
display: flex;
justify-content: center;

h1{
  font-size: 10vh;
  -webkit-text-stroke-width: 3.5px; /* largura da borda */
  -webkit-text-stroke-color: #245AAA; /* cor da borda */
  -webkit-text-fill-color: #FFCC00;
  font-family: 'Alfa Slab One', cursive;
}
`
const DivConteudo = styled.div`
display: grid;
justify-content: center;
font-family: 'Rubik', sans-serif;

select{
  width: 40vw;
  height: 6vh;
  border: none;
  font-size: 4vh;
  :focus{
    border: none;
  }
}
`

const App = () => {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const getPokeList = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getPokeList()
  }, []);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <DivMain>
      <div>
        <GlobalStyle/>
        <h1>POKÉMON DE MONTÃO</h1>
          <DivConteudo>
            <select onChange={changePokeName}>
              <option value={""}>NENHUM</option>
              {pokeList.map(pokemon => {
                return (
                  <option key={pokemon.name} value={pokemon.name}>
                    {pokemon.name}
                  </option>
                );
              })}
            </select>
            {pokeName && <PokeCard pokemon={pokeName} />}
          </DivConteudo>
        </div>
      </DivMain>
  );
}

export default App;
