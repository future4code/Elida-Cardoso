import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connections";

const app: Express = express();

app.use(express.json());
app.use(cors());

const getActorById = async (id: string) => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = "${id}"
    `);
    return result[0][0];
};

app.get("/actor/:id", async(req, res) => {
    try {
        const id = req.params.id
        const result = await getActorById(id)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message);
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});