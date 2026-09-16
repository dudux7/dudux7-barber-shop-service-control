"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// view/Screen.ts
// Classe base das telas. Guarda o que TODA tela precisa:
// o prompt (para ler do teclado) e o controller (para acessar os dados).
// Cada tela específica herda daqui -> isso é herança aplicada na camada de view.
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Screen {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
    }
    // pausa a tela até o usuário apertar ENTER
    pause() {
        this.prompt("\nPressione ENTER para continuar...");
    }
}
exports.default = Screen;
