"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// view/BarberScreen.ts
const EntityScreen_1 = __importDefault(require("./EntityScreen"));
class BarberScreen extends EntityScreen_1.default {
    register() {
        const name = this.prompt("Digite o nome do Barbeiro: ");
        const phone = this.prompt("Digite o telefone do Barbeiro: ");
        this.controller.barbers.register(name, phone);
        console.log("Barbeiro cadastrado com sucesso!");
    }
    list() {
        if (this.controller.barbers.isEmpty()) {
            console.log("Nenhum barbeiro cadastrado ainda.");
            return;
        }
        this.controller.barbers.listAll().forEach((b, index) => {
            console.log(`${index + 1}. ${b.getInfo()}`);
        });
    }
    select() {
        if (this.controller.barbers.isEmpty()) {
            throw new Error("Não há barbeiros para selecionar");
        }
        this.list();
        const barbers = this.controller.barbers.listAll();
        const escolha = Number(this.prompt("Escolha o barbeiro (número): ").trim()) - 1;
        const barber = barbers[escolha];
        if (!barber) {
            throw new Error("Barbeiro inválido");
        }
        return barber;
    }
}
exports.default = BarberScreen;
