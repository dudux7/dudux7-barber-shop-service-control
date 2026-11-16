"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// view/ClientScreen.ts
// Tudo que é TELA de cliente mora aqui.
const EntityScreen_1 = __importDefault(require("./EntityScreen"));
class ClientScreen extends EntityScreen_1.default {
    register() {
        const name = this.prompt("Digite o nome do Cliente: ");
        const phone = this.prompt("Digite o telefone do Cliente: ");
        this.controller.clients.register(name, phone);
        console.log("Cliente cadastrado com sucesso!");
    }
    list() {
        if (this.controller.clients.isEmpty()) {
            console.log("Nenhum cliente cadastrado ainda.");
            return;
        }
        this.controller.clients.listAll().forEach((c, index) => {
            console.log(`${index + 1}. ${c.getInfo()}`);
        });
    }
    //usado pela tela de atendimento
    //permite escolher um cliente do array de clientes
    select() {
        if (this.controller.clients.isEmpty()) {
            throw new Error("Não há clientes para selecionar");
        }
        this.list();
        const clients = this.controller.clients.listAll();
        const escolha = Number(this.prompt("Escolha o cliente (número): ").trim()) - 1;
        const client = clients[escolha];
        if (!client) {
            throw new Error("Cliente inválido");
        }
        return client;
    }
}
exports.default = ClientScreen;
