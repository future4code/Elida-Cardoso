import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    const token = localStorage.getItem("token");
    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login");

    return (
        <GlobalContext.Provider value={{rightButtonText, setRightButtonText}}>
            {props.children}
        </GlobalContext.Provider>
    )
};

export default GlobalState;