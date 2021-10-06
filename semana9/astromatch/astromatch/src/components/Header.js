import React from "react";
import styled from "styled-components"

const DivHeader = styled.div`
border: 1px solid black;
display: flex;
align-items: center;
`;

const Header = (props) => {
    return (
        <DivHeader className="divHeader">
            <h1>ASTROMATCH</h1>
            <button onClick={() => {props.changePage("home")}}>home</button>
            <button onClick={() => {props.changePage("matches")}}>matches</button>
        </DivHeader>
    )
}
export default Header