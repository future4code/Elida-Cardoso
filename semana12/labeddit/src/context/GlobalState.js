import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    const token = localStorage.getItem("token");
    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login");
    const [postComments, setPostComments] = useState([]);

    return (
        <GlobalContext.Provider value={{rightButtonText, setRightButtonText,
            postComments, setPostComments,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
};

export default GlobalState;