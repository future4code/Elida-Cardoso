import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { Customer, User, Client, Place } from "./types"

const app: Express = express();

// const newUser1: User = new User("001", "elida@gmail.com", "Élida", "123456")

// const newUser2: Customer = new Customer("002", "astrodev@gmail.com", "Astrodev", "123456", "125478536145")

// console.log(newUser2.getId(), newUser2.getEmail(), newUser2.getName(), newUser2.getCreditCard())

// console.log(newUser2.introduceYourself())

const client:  Client = {
    name: "Gol",
    registrationNumber: 2,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2;
    }
}

console.log(client)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});