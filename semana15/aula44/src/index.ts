import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { stringify } from 'querystring';

const app = express()
app.use(express.json())
app.use(cors())



type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

// Exercicio 1 --------------------------
// a) GET
// b) /user

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users)
})

// Exercicio 2 e 3 --------------------------

app.get("/users/search", (req: Request, res:Response) => {
  let result: User[] = users;
  let errorCode = 400;

  try {
    if (!req.query.type && !req.query.name) {
      errorCode = 400
      throw new Error("Invalid Parameters");
    }

    if (req.query.type) {
      const type: string = req.query.type as string;
      result = result.filter((user) => user.type === type.toUpperCase());
    }

    if (req.query.name) {
      const name: string = req.query.name as string;
      result = result.filter((user) => user.name === name)
    }

    res.status(200).send(result)

  } catch(error: any) {
      res.status(errorCode).send({ message: error.message })
  }
});

// Exercicio 4 --------------------------

app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400;

  try{
    const {id, name, email, type, age} = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422 
      throw new Error("Missing required parameters")
    };

    const newUser: User = { id, name, email, type, age };

    users.push(newUser);

    res.status(201).send({ message: "User created!"});

  } catch(error: any) {
    res.status(errorCode).send({ message: error.message})
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.log("Failure upon starting server.")
  }
});