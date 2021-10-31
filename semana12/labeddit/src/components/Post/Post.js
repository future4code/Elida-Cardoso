    import React from "react";
    import useRequestData from "../../hooks/useRequestData"
    import { useHistory } from "react-router";
    import { BASE_URL } from "../../constants/urls"
    import { goToPostDetailsPage } from "../../routes/coordinator"

    import { ContainerPost, DivUsername, DivText, DivNumbers, DivArrows } from "./styled"
    import IconButton from '@mui/material/IconButton';
    import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
    import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
    import Button from '@mui/material/Button';

    const Post = () => {
        const history = useHistory();

        const posts = useRequestData([], `${BASE_URL}/posts`);

        const onClickPost = (id) => {
            goToPostDetailsPage(history, id);
        }
        
        const postComponents = posts.map((post) => {
            return (
                <ContainerPost key={post.id}>
                    <DivUsername>
                        <p>{post.username}</p>
                    </DivUsername>
                    <DivText onClick={() => onClickPost(post.id)} >
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
                        { post.commentCount && 
                            post.commentCount ? 
                                <Button variant="text" onClick={() => onClickPost(post.id)} >{post.commentCount} comentários</Button> : 
                                <Button variant="text" onClick={() => onClickPost(post.id)} > 0 comentários</Button> 
                        }
                    </DivNumbers>
                </ContainerPost>
            )
        });

        return (
            <>
                {postComponents && postComponents}
            </>
        )
    };
    
    export default Post;