"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// view/ServiceScreen.ts
const EntityScreen_1 = __importDefault(require("./EntityScreen"));
class ServiceScreen extends EntityScreen_1.default {
    register() {
        const name = this.prompt("Digite o nome do Serviço: ");
        const price = Number(this.prompt("Digite o preço do Serviço: "));
        this.controller.services.register(name, price);
        console.log("Serviço cadastrado com sucesso!");
    }
    list() {
        if (this.controller.services.isEmpty()) {
            console.log("Nenhum serviço cadastrado ainda.");
            return;
        }
        this.controller.services.listAll().forEach((s, index) => {
            console.log(`${index + 1}. ${s.getName()} - R$${s.getPrice()}`);
        });
    }
    // permite escolher VÁRIOS serviços, ex: 1,3
    selectMany() {
        if (this.controller.services.isEmpty()) {
            throw new Error("Não há serviços para selecionar");
        }
        this.list();
        const services = this.controller.services.listAll();
        const escolhas = this.prompt("Escolha os serviços (números separados por vírgula, ex: 1,3): ");
        const escolhidos = escolhas
            .split(",")
            .map(numero => services[Number(numero.trim()) - 1])
            .filter(servico => servico !== undefined);
        if (escolhidos.length === 0) {
            throw new Error("Nenhum serviço válido selecionado");
        }
        return escolhidos;
    }
}
exports.default = ServiceScreen;
