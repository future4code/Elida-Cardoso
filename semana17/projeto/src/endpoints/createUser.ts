import {Response, Request} from 'express';
import { connection } from "../connection"
import { User } from '../types';

const createUser = async (req: Request, res: Response): Promise<void> => {
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

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
};

export default createUser;