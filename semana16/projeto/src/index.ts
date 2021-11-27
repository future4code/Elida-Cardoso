import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { connection } from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/user", async (req, res) => {
    let errorCode = 500;

    try {
        const {name, nickname, email} = req.body

        if(!name || !nickname || !email) {
            errorCode = 422
            throw new Error("Something is missing! Check the fields")
        }
        await connection("ToDoListUsers").insert({
            id: Date.now().toString(),
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        });

        res.status(201).send("User created")
    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    }
});

app.get("/user/:id", async (req, res) => {
    try {
        const user = await connection("ToDoListUsers")
            .where({id: req.params.id})
            .select("id", "nickname");

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});

app.put("/user/edit/:id", async (req, res) => {
    let errorCode = 500;

    try {
        const {name, nickname} = req.body

        if(!name || !nickname) {
            errorCode = 422
            throw new Error("Something is missing! Check the fields")
        };

        await connection("ToDoListUsers")
            .update({
                name: req.body.name,
                nickname: req.body.nickname,
            })
            .where({id: req.params.id})

        res.status(200).send("User updated")
    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
});

app.post("/task", async (req, res) => {
    let errorCode = 500;

    try {
        const {title, description, limitDate, creatorUserId} = req.body

        if(!title || !description || !limitDate || !creatorUserId) {
            errorCode = 422
            throw new Error("Something is missing! Check the fields")
        };

        const convertedDate = new Date(req.body.limitDate)
        .toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'})
        .replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');

        await connection("ToDoListUsers")
            .insert({
                id: Date.now().toString(),
                title: req.body.title,
                description: req.body.description,
                status: "to_do",
                limit_date: convertedDate,
                creator_user_id: req.body.creatorUserId
            });
        
        res.status(201).send("Task created")
    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});