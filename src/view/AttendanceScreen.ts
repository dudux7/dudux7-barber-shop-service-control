//Esta tela reusa as telas de cliente, barbeiro e serviço
//em vez de reescrever a lógica de seleção.
import EntityScreen from "./EntityScreen";
import MainController from "../controller/MainController";
import ClientScreen from "./ClientScreen";
import BarberScreen from "./BarberScreen";
import ServiceScreen from "./ServiceScreen";
import Attendance from "../model/Attendance";
import Service from "../model/Service";

export default class AttendanceScreen extends EntityScreen {

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

    /*public register(): void {
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
        
        const total = Attendance.TotalPrice(services);
        console.log(`Valor total do atendimento: R$${total.toFixed(2)}`);

        const confirm = this.prompt("Confirma o atendimento (s/n): ");
        if (confirm.toLowerCase() !== "s") {
            console.log("Atendimento cancelado!");
            return;
        }

        this.controller.attendances.register(client, barber, services, date);
        console.log("Atendimento cadastrado com sucesso!");
    }*/
    public register(): void {
        const client = this.clientScreen.select();
        const barber = this.barberScreen.select();
        const services = this.serviceScreen.selectMany();

        const dateInput = this.prompt("Digite a data do atendimento (dd/mm/aaaa) ou deixe em branco para hoje: ");

        let attendance: Attendance;

        if (dateInput.trim() === "") {
            //chama a sobrecarga sem data AttendanceService usa new Date()
            attendance = this.controller.attendances.register(client, barber, services);
        } else {
            const [day, month, year] = dateInput.split("/").map(Number);
            const date = new Date(year, month - 1, day);

            if (!Attendance.isValidDate(date)) {
                console.log("Data inválida! Cadastro cancelado.");
                return;
            }

            //chama a sobrecarga com data
            attendance = this.controller.attendances.register(client, barber, services, date);
        }

        console.log(`Atendimento cadastrado com sucesso! Data: ${Attendance.formatDate(attendance.getDate())}`);
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
                `Total: R$${a.getTotalPrice().toFixed(2)} | ` +
                `Status: ${a.getStatus()} | `
            );
        });
    }

    public changeStatus(): void {
        if (this.controller.attendances.isEmpty()) {
            console.log("Nenhum atendimento registrado ainda.");
            return;
        }

        this.list();

        const id = Number(this.prompt("\nDigite o número do atendimento: "));
        const action = this.prompt("1. Concluir | 2. Cancelar: ");

        let attendance: Attendance;

        switch (action) {
            case "1":
                attendance = this.controller.attendances.complete(id);
                break;
            case "2":
                attendance = this.controller.attendances.cancel(id);
                break;
            default:
                console.log("Opção inválida! Nenhuma alteração feita.");
                return;
            }

        console.log(`Atendimento #${attendance.getId()} agora está: ${attendance.getStatus()}`);
    }
}
