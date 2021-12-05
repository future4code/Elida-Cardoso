export type User = {
    id: string
    name: string
    email: string
    password: string
};

export type Product = {
    id: string
    name: string
    price: string
    image_url: string
};

export type Purchase = {
    id: string
    user_id: string
    product_id: string
    quantity: string
    total_price: number
};