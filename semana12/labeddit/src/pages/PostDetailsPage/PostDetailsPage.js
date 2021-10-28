import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage"

const PostDetailsPage = () => {
    useProtectedPage();

    return (
        <div>
            <h1>PostDetailsPage</h1>
        </div>
    )
}

export default PostDetailsPage;