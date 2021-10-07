import React from "react";
import styled from "styled-components"

const DivHeader = styled.div`
padding: 8px 4px;
display: flex;
align-items: center;
justify-content: space-between;
    h1{
        font-family: 'Josefin Sans', sans-serif;
    }
`;

const Header = (props) => {
    return (
        <DivHeader className="divHeader">
            <button onClick={() => {props.changePage("home")}}>home</button>
            <h1>astromatch</h1>
            <button onClick={() => {props.changePage("matches")}} bg="brand.900">matches</button>
        </DivHeader>
    )
}
export default Header