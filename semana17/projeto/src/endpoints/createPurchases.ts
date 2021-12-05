import { Request, Response } from "express";
import { connection } from "../connection";
import { Product, User, Purchase } from "../types";

const createPurchases = async (req: Request, res: Response) => {
    try {
        const {product_id, user_id, quantity} = req.body;

        const [user]: User[] = await connection("labecommerce_users")
            .select()
            .where({ id: user_id });

            if (!user) {
                throw new Error("Usuário não encontrado(user_id)")
            };

            const [product]: Product[] = await connection("labecommerce_products")
            .select()
            .where({ id: product_id });

            if (!product) {
                throw new Error("Produto não encontrado(product_id)")
            };

            const total_price = Number(product.price) * Number(quantity);

            const purchase: Purchase = {
                id: Date.now().toString(),
                user_id,
                product_id,
                quantity,
                total_price
            };

            await connection("labecommerce_purchases").insert(purchase);

            res.status(200).send("Compra realizada");

    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message);
    }
};

export default createPurchases;