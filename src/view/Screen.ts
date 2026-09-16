// view/Screen.ts
// Classe base das telas. Guarda o que TODA tela precisa:
// o prompt (para ler do teclado) e o controller (para acessar os dados).
// Cada tela específica herda daqui -> isso é herança aplicada na camada de view.
import promptSync from "prompt-sync";
import MainController from "../controller/MainController";

export default abstract class Screen {

    protected prompt = promptSync();
    protected controller: MainController;

    constructor(controller: MainController) {
        this.controller = controller;
    }

    // pausa a tela até o usuário apertar ENTER
    protected pause(): void {
        this.prompt("\nPressione ENTER para continuar...");
    }
}
