import React from "react";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router";
import { singUp } from "../../services/access";

import { SignUpFormContainer, InputsContainer} from "./styled"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SingUpForm = () => {
    const [form, onChange, clear] = useForm({username: "", email: "", password: ""});
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault();
        singUp(form, clear, history);
    };

    return (
        <SignUpFormContainer>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                    <TextField 
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"Name"}
                        variant={"filled"}
                        margin={"normal"}
                        color={"primary"}
                        fullWidth
                        required
                    />
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
                        inputProps={{
                            pattern: "^.{8,30}",
                            title: "A senha deve ter entre 8 e 30 caracteres"
                        }}
                        required
                    />
                </InputsContainer>
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        Sing Up
                    </Button>
            </form>
        </SignUpFormContainer>
    )
};

export default SingUpForm;