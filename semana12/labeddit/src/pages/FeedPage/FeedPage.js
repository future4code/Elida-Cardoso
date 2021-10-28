import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"

import { ContainerFeed, ContainerPost, DivUsername, DivText, DivNumbers, DivArrows } from "./styled"
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';

const FeedPage = () => {
    useProtectedPage();

    const posts = useRequestData([], `${BASE_URL}/posts`);
    console.log(posts)
    
    const postComponents = posts.map((post) => {
        return (
            <ContainerPost key={post.id}>
                <DivUsername>
                    <p>{post.username}</p>
                </DivUsername>
                <DivText>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </DivText>
                <DivNumbers>
                    <DivArrows>
                        <IconButton aria-label="positive">
                            <ArrowCircleUpSharpIcon/>
                        </IconButton>
                        <p>{post.voteSum}</p>
                        <IconButton aria-label="negative">
                            <ArrowCircleDownSharpIcon/>
                        </IconButton>
                    </DivArrows>
                    { post.commentCount && post.commentCount ? <p>{post.commentCount} comentários</p> : <p> 0 comentários</p> }
                </DivNumbers>
            </ContainerPost>
        )
    })

    return (
        <ContainerFeed>
            <h1>Criar novo post +</h1>
            {postComponents}
        </ContainerFeed>
    )
}

export default FeedPage;