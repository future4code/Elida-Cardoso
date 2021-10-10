import React from "react";
import styled from "styled-components"
import lista from "../IMG/group_black_24dp.svg"
import matches from "../IMG/local_fire_department_black_24dp.svg"

const DivHeader = styled.div`
padding: 8px 4px;
display: flex;
align-items: center;
justify-content: space-between;
    h1{
        font-family: 'Josefin Sans',sans-serif;
        font-size: 3vw;
        color: #112770;
        padding-top: 8px;
        background-image: linear-gradient(to right,transparent 50%,#DC9AFE 50%);
        background-size: 200% 50%;
        background-repeat: repeat-x;
        background-position: -100% 100%;
        cursor: default;
    }

    img {
        height: 6vh;
        margin: 2px 11px;
        cursor: pointer;

        :active{
            transform: scale(0.8);
        }
    }
`;

const Header = (props) => {
    return (
        <DivHeader className="divHeader">
            <img src={lista} onClick={() => {props.changePage("home")}}/>
            <h1>astromatch</h1>
            <img src={matches} onClick={() => {props.changePage("matches")}}/>
        </DivHeader>
    )
}
export default Header