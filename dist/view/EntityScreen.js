"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// view/EntityScreen.ts
// Classe ABSTRATA intermediária: serve de modelo para as telas que cuidam de uma entidade
// (cliente, barbeiro, serviço e atendimento).
// Ela herda de Screen (então já tem o prompt, o controller e o pause) e ainda
// OBRIGA cada tela filha a implementar register() e list().
// Se uma filha não implementar os dois métodos, o TypeScript dá erro de compilação.
// Não dá para fazer "new EntityScreen(...)": só as filhas podem ser instanciadas.
const Screen_1 = __importDefault(require("./Screen"));
class EntityScreen extends Screen_1.default {
}
exports.default = EntityScreen;
