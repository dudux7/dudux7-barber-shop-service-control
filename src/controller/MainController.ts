// controller/MainController.ts
// Agora ele NÃO cadastra nada direto. Ele só cria o Database
// e distribui esse mesmo Database para os controllers específicos.
import Database from "../databases/Database";
import ClientService from "../service/ClientService";
import BarberService from "../service/BarberService";
import ItemService from "../service/ItemService";
import AttendanceService from "../service/AttendanceService";
import ClientController from "./ClientController";
import BarberController from "./BarberController";
import ServiceController from "./ServiceController";
import AttendanceController from "./AttendanceController";

export default class MainController {
    public clients: ClientController;
    public barbers: BarberController;
    public services: ServiceController;
    public attendances: AttendanceController;

    constructor() {
        const database = new Database();

        const clientService = new ClientService(database);
        const barberService = new BarberService(database);
        const itemService = new ItemService(database);
        const attendanceService = new AttendanceService(database);

        this.clients = new ClientController(clientService);
        this.barbers = new BarberController(barberService);
        this.services = new ServiceController(itemService);
        this.attendances = new AttendanceController(attendanceService);
    }
}
