import React, { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { GlobalContext } from '../../context/GlobalContext';
import useForm from "../../hooks/useForm"

import { DivArrows, DivComments } from "./styled"
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import Button from '@mui/material/Button';


const PostComments = () => {
    const { postComments } = useContext(GlobalContext);

    console.log(postComments)

    const newComment = (id) => {
        axios.post(`${BASE_URL}/posts/${id}/comments`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
            })
            .then(alert("Comentário criado com sucesso!"))
            .catch((error) => {
                alert(error.response.data)
            })
    }

    const comments = postComments.map((comment) => {
        return (
            <DivComments key={comment.postId}>
                <DivArrows>
                    <IconButton aria-label="positive">
                        <ArrowCircleUpSharpIcon/>
                            </IconButton>
                                {comment.voteSum && comment.voteSum ? <p>{comment.voteSum}</p> : <p>0</p>}
                            <IconButton aria-label="negative">
                        <ArrowCircleDownSharpIcon/>
                    </IconButton>
                </DivArrows>
                <div>
                    <h4>{comment.username}</h4>
                    <p>{comment.body}</p>
                </div>
            </DivComments>
        )
    })
    
    return (
        <>
            <Button onClick={newComment}>Novo Comentário +</Button>
            {comments}
        </>
    )
}

export default PostComments;