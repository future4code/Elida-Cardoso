import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StyledToolbar } from "./styled"

import { useHistory } from 'react-router';
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from "react"


const Header = () => {
    const {rightButtonText, setRightButtonText} = useContext(GlobalContext);
    const token = localStorage.getItem("token");
    
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("token")
    };

    const rightButtonAction = () => {
        if (token){
            logout()
            setRightButtonText("Login")
            goToLoginPage(history)
        } else {
            goToLoginPage(history)
        }
    };

    return (
        <Box>
        <AppBar position="static">
            <StyledToolbar>
            <Button color="inherit" variant="h6" component="div" onClick={() => goToFeedPage(history)}>
                LabEddit
            </Button>
            <Button color="inherit" onClick={rightButtonAction}>{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
        </Box>
    );
}

export default Header;