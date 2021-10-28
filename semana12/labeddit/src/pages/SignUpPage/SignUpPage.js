import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import { ScreenContainer } from "./styled"

const SignUpPage = () => {
    useUnprotectedPage();
    
    return (
        <ScreenContainer>
            <h1>LabEddit</h1>
            <SignUpForm />
        </ScreenContainer>
    )
}

export default SignUpPage;