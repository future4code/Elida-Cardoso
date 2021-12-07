import { Request, Response } from "express";
import { connection } from "../connection";
import { Product } from "../types";

const createProducts = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500
    try {
        const {name, price, image_url} = req.body;

        if (!name || !price || !image_url) {
            errorCode = 422;
            throw new Error("Algum parâmetro faltando, verifique os campos")
        };

        const neWProduct: Product = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        };

        await connection("labecommerce_products").insert(neWProduct);
        res.status(200).send("Produto criado com sucesso");

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
};

export default createProducts;