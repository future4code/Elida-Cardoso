import React from "react";
import AddPlaylist from "./components/AddPlaylist";
import Playlists from "./components/Playlists";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Yaldevi:wght@300&display=swap');

    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: #EDEDED;
      font-family: 'Courier New', Courier, monospace;
    }
`
const MainDiv = styled.div`
  font-weight: 800;
  background-color: #171717;
  display: grid;
  align-items: center;
  grid-template-rows: 13vh 20vh 1fr;
`

const Header = styled.header`
  background-color: #171717;
  box-shadow: gray 0 0 4px 0;
  font-size: 8vh;
  padding: 2vh 1vh;
`

export default class App extends React.Component{
  render () {
    return (
      <MainDiv>
        <GlobalStyle/>
        <div>
          <Header>Labefy</Header>
        </div>

        <div>
          <AddPlaylist/>
        </div>

        <div>
          <Playlists />
        </div>
      </MainDiv>
    );
  }
}