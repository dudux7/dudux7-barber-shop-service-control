
//Classe de cliente que herda da classe Pessoa
import Person from "./Person";

export default class Client extends Person {
    private phone!: string;

    constructor(name: string, phone: string) {
        super(name);
        this.phone = phone;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }
}