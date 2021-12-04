import {Response, Request} from 'express';
import { connection } from "../connection"

type User = {
    id: string
    name: string
    email: string
    password: string
};

const createUser = async (req: Request, res: Response) => {
    let errorCode = 500;

    try {
        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            errorCode = 422;
            throw new Error("Algum parâmetro faltando, verifique os campos")
        };

        const newUser: User = {
            id: Date.now().toString(),
            name,
            email,
            password
        }

        await connection("labecommerce_users").insert(newUser);

        res.status(200).send("Usuário criado com sucesso");

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
};

export default createUser;