"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// model/Servico.ts
class Service {
    constructor(name, price) {
        if (Service.nameExistentes.includes(name)) {
            //Se o nome já existir, ele lança um erro e não permite criar o serviço
            throw new Error("Nome já existe");
        }
        Service.nameExistentes.push(name);
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
}
//funciona como uma "lista de nomes já usados" compartilhada entre todas as instâncias de Servico
//isso garante que o nome de um serviço não seja usado mais de uma vez
Service.nameExistentes = [];
exports.default = Service;
