"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Classe Pessoa
class Person {
    constructor(name) {
        //incrementa o contador de ids
        Person.contador++;
        //seta o id da classe com o valor do contador
        this.id = Person.contador;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getInfo() {
        return `${this.getName()} (#${this.getId()})`;
    }
}
//static para criar um contador de ids
//toda vez que o constructor roda, ele incrementa Pessoa.contador++ e usa o valor novo como id.
//isso garante que o id de cada pessoa é único
Person.contador = 0;
exports.default = Person;
