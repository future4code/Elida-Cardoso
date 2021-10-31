    import React, { useContext, useState } from "react";
    import axios from "axios";
    import useRequestData from "../../hooks/useRequestData"
    import { BASE_URL } from "../../constants/urls"
    import { GlobalContext } from '../../context/GlobalContext';
    import PostComments from "../Comments/PostComments"

    import { ContainerPost, DivUsername, DivText, DivNumbers, DivArrows } from "./styled"
    import IconButton from '@mui/material/IconButton';
    import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
    import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
    import Button from '@mui/material/Button';

    const Post = () => {
        const posts = useRequestData([], `${BASE_URL}/posts`);
        const { setPostComments } = useContext(GlobalContext);
        const [showComments, setShowComments] = useState(false);


        const onClickPost = (id) => {
            axios.get(`${BASE_URL}/posts/${id}/comments`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
                }).then((response) => { setPostComments(response.data) })
                .catch((error) => {
                    alert(error.response.data)
                })
            setShowComments(prevShowComments => ({
                ...prevShowComments,
                [id]: !prevShowComments[id]
            }));
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
                                {post.voteSum && post.voteSum ? <p>{post.voteSum}</p> : <p>0</p>}
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
                    {showComments[post.id] ? <PostComments /> : null}
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