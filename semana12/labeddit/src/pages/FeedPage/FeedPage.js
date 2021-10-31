import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import Post from "../../components/Post/Post";

import { ContainerFeed } from "./styled"


const FeedPage = () => {
    useProtectedPage();
    

    return (
        <ContainerFeed>
            <h1>Criar novo post +</h1>
            <Post />
        </ContainerFeed>
    )
}

export default FeedPage;