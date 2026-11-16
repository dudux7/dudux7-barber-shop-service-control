//Classe Pessoa
import Describable from "./Describable";

export default class Person implements Describable {
    //static para criar um contador de ids
    //toda vez que o constructor roda, ele incrementa Pessoa.contador++ e usa o valor novo como id.
    //isso garante que o id de cada pessoa é único
    private static contador: number = 0;

    private id: number;
    private name!: string;


    constructor(name: string) {
        //incrementa o contador de ids
        Person.contador++;
        //seta o id da classe com o valor do contador
        this.id = Person.contador;
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

    public getInfo(): string {
        return `${this.getName()} (#${this.getId()})`;
    }
}