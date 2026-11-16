// model/Servico.ts
import Describable from "./Describable";

export default class Service implements Describable {

    //funciona como uma "lista de nomes já usados" compartilhada entre todas as instâncias de Servico
    //isso garante que o nome de um serviço não seja usado mais de uma vez
     private static nameExistentes: string[] = [];

    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        if (Service.nameExistentes.includes(name)) {
            //Se o nome já existir, ele lança um erro e não permite criar o serviço
            throw new Error("Nome já existe");
        }
        Service.nameExistentes.push(name);

        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    // método exigido pela interface Describable
    public getInfo(): string {
        return `${this.name} - R$${this.price}`;
    }
}