"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// view/MainScreen.ts
// Agora ele só faz UMA coisa: mostrar o menu e chamar a tela certa.
const Screen_1 = __importDefault(require("./Screen"));
const ClientScreen_1 = __importDefault(require("./ClientScreen"));
const BarberScreen_1 = __importDefault(require("./BarberScreen"));
const ServiceScreen_1 = __importDefault(require("./ServiceScreen"));
const AttendanceScreen_1 = __importDefault(require("./AttendanceScreen"));
class MainScreen extends Screen_1.default {
    constructor(controller) {
        super(controller);
        this.clientScreen = new ClientScreen_1.default(controller);
        this.barberScreen = new BarberScreen_1.default(controller);
        this.serviceScreen = new ServiceScreen_1.default(controller);
        this.attendanceScreen = new AttendanceScreen_1.default(controller, this.clientScreen, this.barberScreen, this.serviceScreen);
        this.open();
    }
    open() {
        let option = 0;
        while (option !== 10) {
            console.clear();
            option = Number(this.prompt("DIGITE:\n" +
                "1. Cadastrar Cliente\n" +
                "2. Cadastrar Barbeiro\n" +
                "3. Cadastrar Serviço\n" +
                "4. Registrar Atendimento\n" +
                "5. Listar Clientes\n" +
                "6. Listar Barbeiros\n" +
                "7. Listar Serviços\n" +
                "8. Listar Atendimentos\n" +
                "9. Alterar Status do Atendimento\n" +
                "10. Sair\n"));
            // try/catch no menu: se qualquer tela lançar erro
            // (nome de serviço repetido, lista vazia, etc.)
            // o programa avisa e volta pro menu em vez de quebrar.
            try {
                switch (option) {
                    case 1:
                        this.clientScreen.register();
                        break;
                    case 2:
                        this.barberScreen.register();
                        break;
                    case 3:
                        this.serviceScreen.register();
                        break;
                    case 4:
                        this.attendanceScreen.register();
                        break;
                    case 5:
                        this.clientScreen.list();
                        break;
                    case 6:
                        this.barberScreen.list();
                        break;
                    case 7:
                        this.serviceScreen.list();
                        break;
                    case 8:
                        this.attendanceScreen.list();
                        break;
                    case 9:
                        this.attendanceScreen.changeStatus();
                        break;
                    case 10:
                        console.log("Saindo...");
                        continue;
                    default: console.log("Entre com um número entre 1 e 10");
                }
            }
            catch (erro) {
                console.log(`Erro: ${erro.message}`);
            }
            this.pause();
        }
    }
}
exports.default = MainScreen;
