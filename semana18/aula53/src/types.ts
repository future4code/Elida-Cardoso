export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
            id: string,
            email: string,
            name: string,
            password: string
        ){
            console.log("Chamando o construtor da classe User")
            this.id = id
            this.email = email
            this.name = name 
            this.password = password
        }

        public introduceYourself(): string {
            return `Olá, sou ${this.name}. Bom dia!`
        }

        public getId(): string {
            return this.id
        }

        public getEmail(): string {
            return this.email
        }

        public getName(): string {
            return this.name
        }
}

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    
    public getCreditCard(): string {
        return this.creditCard;
    }
}

export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

export abstract class Place {
    constructor(protected cep: string) {}

    public getCep(): string {
        return this.cep;
    }
}