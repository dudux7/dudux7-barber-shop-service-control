"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// view/AttendanceScreen.ts
// Esta tela REUSA as telas de cliente, barbeiro e serviço
// em vez de reescrever a lógica de seleção.
const Screen_1 = __importDefault(require("./Screen"));
const Attendance_1 = __importDefault(require("../model/Attendance"));
class AttendanceScreen extends Screen_1.default {
    constructor(controller, clientScreen, barberScreen, serviceScreen) {
        super(controller);
        this.clientScreen = clientScreen;
        this.barberScreen = barberScreen;
        this.serviceScreen = serviceScreen;
    }
    register() {
        const client = this.clientScreen.select();
        const barber = this.barberScreen.select();
        const services = this.serviceScreen.selectMany();
        const dateInput = this.prompt("Digite a data do atendimento (dd/mm/aaaa): ");
        const [day, month, year] = dateInput.split("/").map(Number);
        const date = new Date(year, month - 1, day);
        if (!Attendance_1.default.isValidDate(date) ||
            date.getDate() !== day ||
            date.getMonth() !== month - 1 ||
            date.getFullYear() !== year) {
            console.log("Data inválida! Cadastro cancelado.");
            return;
        }
        const total = Attendance_1.default.calculateTotal(services);
        console.log(`Valor total do atendimento: R$${total.toFixed(2)}`);
        const confirm = this.prompt("Confirma o atendimento (s/n): ");
        if (confirm.toLowerCase() !== "s") {
            console.log("Atendimento cancelado!");
            return;
        }
        this.controller.attendances.register(client, barber, services, date);
        console.log("Atendimento cadastrado com sucesso!");
    }
    list() {
        if (this.controller.attendances.isEmpty()) {
            console.log("Nenhum atendimento registrado ainda.");
            return;
        }
        this.controller.attendances.listAll().forEach(a => {
            const nomesServicos = a.getServices().map(s => s.getName()).join(", ");
            console.log(`#${a.getId()} | ${Attendance_1.default.formatDate(a.getDate())} | ` +
                `Cliente: ${a.getClient().getName()} | ` +
                `Barbeiro: ${a.getBarber().getName()} | ` +
                `Serviços: ${nomesServicos} | ` +
                `Total: R$${a.getTotalPrice().toFixed(2)}`);
        });
    }
}
exports.default = AttendanceScreen;
