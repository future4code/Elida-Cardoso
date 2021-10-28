import React, { useContext } from "react";
import { GlobalContext } from '../../context/GlobalContext';
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router";
import { login } from "../../services/access"

import { LoginFormContainer, InputsContainer } from "./styled";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const LoginForm = () => {
    const {setRightButtonText} = useContext(GlobalContext);
    const [form, onChange, clear] = useForm({email: "", password:""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault();
        login(form, clear, history, setRightButtonText)
    }

    return (
        <LoginFormContainer>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"filled"}
                        margin={"normal"}
                        color={"primary"}
                        fullWidth
                        type={"email"}
                        required
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Password"}
                        variant={"filled"}
                        margin={"normal"}
                        color={"primary"}
                        fullWidth
                        type={"password"}
                        required
                    />
                </InputsContainer>
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        Login
                    </Button>
            </form>
        </LoginFormContainer>
    )
};

export default LoginForm;