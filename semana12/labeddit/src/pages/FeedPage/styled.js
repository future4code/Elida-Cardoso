import styled from "styled-components"

export const ContainerFeed = styled.div`
    background-color: #DAE0E6;
    font-family: 'Poppins', sans-serif;
    display: grid;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
`
export const ContainerPost = styled.div`
    display: grid;
    align-items: center;
    grid-template-rows: 8vh 1fr 12vh;
    min-height: 40vh;
    width: 88vh;
    border: 1px solid gray;
    border-radius: 8px;
    background-color: #F1F1F1;
`
export const DivUsername = styled.div`
    display: grid;
    place-content: center;
    border-bottom: 1px solid gray;
    max-height: 100%;

    p{
        font-size: 4vh;
        font-weight: 600;
    }
`
export const DivText = styled.div`
    display: grid;
    place-content: center;
    border-bottom: 1px solid gray;
    max-height: 100%;

    h4 {
        padding: 0;
        margin: 0 0 8px 0;
        font-size: 5vh;
    }

    p{
        padding: 0;
        margin: 0;
        font-size: 4vh;
    }
`
export const DivNumbers = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    max-height: 100%;

    p{
        padding: 0;
        margin: 0;
        font-size: 3vh;
        font-weight: bold;
    }
`
export const DivArrows = styled.div`
    display:flex;
    align-items: center;
`