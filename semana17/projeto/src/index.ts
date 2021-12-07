import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import createUser from './endpoints/createUser';
import getUsers from './endpoints/getUsers';
import createProducts from './endpoints/createProducts';
import getProducts from './endpoints/getProducts';
import createPurchases from './endpoints/createPurchases';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users", createUser);
app.get("/users", getUsers);

app.post("/products", createProducts);
app.get("/products", getProducts);

app.post("/purchases", createPurchases);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});