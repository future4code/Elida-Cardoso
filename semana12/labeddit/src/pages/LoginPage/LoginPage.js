import React from "react";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

import { ScreenContainer, SignUpButtonContainer} from "./styled"
import Button from '@material-ui/core/Button'

const LoginPage = () => {
    useUnprotectedPage();

    const history = useHistory();

    return (
        <ScreenContainer>
            <h1>LabEddit</h1>
            <LoginForm />
            <SignUpButtonContainer>
                    <Button
                        onClick={() => goToSignUpPage(history)}
                        type={"submit"}
                        fullWidth
                        variant={"text"}
                        color={"primary"}
                    >
                    Don't have a account? Sign Up Here!
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage;