import React from "react";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import { goToSingUpPage } from "../../routes/coordinator"

import { ScreenContainer, SignUpButtonContainer} from "./styled"
import Button from '@material-ui/core/Button'

const LoginPage = () => {
    const history = useHistory();

    return (
        <ScreenContainer>
            <h1>Login</h1>
            <LoginForm />
            <SignUpButtonContainer>
                    <Button
                        onClick={() => goToSingUpPage(history)}
                        type={"submit"}
                        fullWidth
                        variant={"text"}
                        color={"primary"}
                    >
                    Don't have a account? Sing Up Here!
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage;