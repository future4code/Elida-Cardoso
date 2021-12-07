// EXERCÍCIO 1 ----------------------------------------------------------------
// A) Para fazer ações na criação das instancias. constructor () {}
// B) todas as vezes que foi criada uma nova instancia
// C) fazendo um getter

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf() {
        return this.cpf
    };

    public getName() {
        return this.name
    };

    public getAge() {
        return this.age
    };

    public getBalance() {
        return this.balance
    };

    public getTransactions() {
        return this.transactions
    };
}

// EXERCÍCIO 2 ----------------------------------------------------------------

class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor (date: string, value: number, descrition: string) {
        this.date = date;
        this.value = value;
        this.description = descrition;
    }

    public getDate() {
        return this.date
    };

    public getValue() {
        return this.value
    };

    public getDescription() {
        return this.description
    };
};

// EXERCÍCIO 3 ----------------------------------------------------------------

class Bank {
    private accounts: UserAccount[];

    constructor (accounts: UserAccount[]) {
        this.accounts = accounts
    };

    public getAccounts() {
        return this.accounts;
    };
};