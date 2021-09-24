import React from "react";
import AddPlaylist from "./components/AddPlaylist";
import Playlists from "./components/Playlists";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
    }
`

export default class App extends React.Component{
  render () {
    return (
      <div>
        <GlobalStyle/>
        <header>Labefy</header>
        <hr/>

        <AddPlaylist/>
        <hr/>

        <Playlists />
      </div>
    );
  }
}