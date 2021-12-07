import { Request, Response } from "express";
import { connection } from "../connection";
import { Product } from "../types";

const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products: Product[] = await connection("labecommerce_products");
        res.status(200).send(products);

    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message);
    }
};

export default getProducts;