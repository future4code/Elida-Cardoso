import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import Post from "../../components/Post/Post";

import { ContainerFeed } from "./styled"
import Button from '@mui/material/Button';


const FeedPage = () => {
    useProtectedPage();
    

    return (
        <ContainerFeed>
            <Button>Criar novo post +</Button>
            <Post />
        </ContainerFeed>
    )
}

export default FeedPage;