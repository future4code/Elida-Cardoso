import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StyledToolbar } from "./styled"

import { useHistory } from 'react-router';
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"


const Header = () => {
    const history = useHistory();
    
    return (
        <Box>
        <AppBar position="static">
            <StyledToolbar>
            <Button color="inherit" variant="h6" component="div" onClick={() => goToFeedPage(history)}>
                LabEddit
            </Button>
            <Button color="inherit" onClick={() => goToLoginPage(history)}>Login</Button>
            </StyledToolbar>
        </AppBar>
        </Box>
    );
}

export default Header;