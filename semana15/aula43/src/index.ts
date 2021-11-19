import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries } from "./data"

const app: Express = express();

app.use(express.json());
app.use(cors());
app.listen(3003, () => { console.log("Server is running in http://localhost:3003")});

app.get("/test", (req, res) => {
    res.send("Olá, Mundo!")
})

app.get("/countries", (req: Request, res: Response) => {
    res.status(200).send(countries);
})



app.get("/countries/search?name=", (req, res) => {
    let result = countries

    if (req.query.name) {
        result = result.filter((country) => {
            return country.name.includes(req.query.name as string)
        })
    } else {
        res.status(404).send("País não encontrado")
    }

    if (req.query.continent) {
        result = result.filter((country) => {
            return country.continent.includes(req.query.continent as string)
        })
    } else {
        res.status(404).send("País não encontrado")
    }
    
    if (req.query.capital) {
        result = result.filter((country) => {
            return country.capital.includes(req.query.capital as string)
        })
    } else {
        res.status(404).send("País não encontrado")
    }
});

app.get("/countries/:id", (req, res) => {
    const result = countries.find((country) => {
        return country.id === Number(req.params.id)
    });

    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not Found")
    };
})