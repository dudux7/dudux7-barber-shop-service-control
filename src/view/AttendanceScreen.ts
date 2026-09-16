// view/AttendanceScreen.ts
// Esta tela REUSA as telas de cliente, barbeiro e serviço
// em vez de reescrever a lógica de seleção.
import Screen from "./Screen";
import MainController from "../controller/MainController";
import ClientScreen from "./ClientScreen";
import BarberScreen from "./BarberScreen";
import ServiceScreen from "./ServiceScreen";
import Attendance from "../model/Attendance";

export default class AttendanceScreen extends Screen {

    private clientScreen: ClientScreen;
    private barberScreen: BarberScreen;
    private serviceScreen: ServiceScreen;

    constructor(
        controller: MainController,
        clientScreen: ClientScreen,
        barberScreen: BarberScreen,
        serviceScreen: ServiceScreen
    ) {
        super(controller);
        this.clientScreen = clientScreen;
        this.barberScreen = barberScreen;
        this.serviceScreen = serviceScreen;
    }

    public register(): void {
        const client = this.clientScreen.select();
        const barber = this.barberScreen.select();
        const services = this.serviceScreen.selectMany();

       const dateInput = this.prompt("Digite a data do atendimento (dd/mm/aaaa): ");

        const [day, month, year] = dateInput.split("/").map(Number);

        const date = new Date(year, month - 1, day);

        if (
            !Attendance.isValidDate(date) ||
            date.getDate() !== day ||
            date.getMonth() !== month - 1 ||
            date.getFullYear() !== year
        ) {
            console.log("Data inválida! Cadastro cancelado.");
            return;
        }
        
        const total = Attendance.calculateTotal(services);
        console.log(`Valor total do atendimento: R$${total.toFixed(2)}`);

        const confirm = this.prompt("Confirma o atendimento (s/n): ");
        if (confirm.toLowerCase() !== "s") {
            console.log("Atendimento cancelado!");
            return;
        }

        this.controller.attendances.register(client, barber, services, date);
        console.log("Atendimento cadastrado com sucesso!");
    }

    public list(): void {
        if (this.controller.attendances.isEmpty()) {
            console.log("Nenhum atendimento registrado ainda.");
            return;
        }

        this.controller.attendances.listAll().forEach(a => {
            const nomesServicos = a.getServices().map(s => s.getName()).join(", ");
            console.log(
                `#${a.getId()} | ${Attendance.formatDate(a.getDate())} | ` +
                `Cliente: ${a.getClient().getName()} | ` +
                `Barbeiro: ${a.getBarber().getName()} | ` +
                `Serviços: ${nomesServicos} | ` +
                `Total: R$${a.getTotalPrice().toFixed(2)}`
            );
        });
    }
}
