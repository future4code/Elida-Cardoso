import React from "react";
import { useParams } from "react-router-dom"
import useProtectedPage from "../../hooks/useProtectedPage";
import Post from "../../components/Post/Post";

import { ContainerPostDetails } from "./styled";

const PostDetailsPage = () => {
    useProtectedPage();
    
    const params = useParams();
    
    return (
        <ContainerPostDetails>
            <h1>PostDetailsPage</h1>
            <Post />
        </ContainerPostDetails>
    )
}

export default PostDetailsPage;