// controller/MainController.ts
// Agora ele NÃO cadastra nada direto. Ele só cria o Database
// e distribui esse mesmo Database para os controllers específicos.
import Database from "../databases/Database";
import ClientController from "./ClientController";
import BarberController from "./BarberController";
import ServiceController from "./ServiceController";
import AttendanceController from "./AttendanceController";

export default class MainController {

    public database: Database;

    public clients: ClientController;
    public barbers: BarberController;
    public services: ServiceController;
    public attendances: AttendanceController;

    constructor() {
        this.database = new Database();

        // todos recebem O MESMO Database, então compartilham os dados
        this.clients = new ClientController(this.database);
        this.barbers = new BarberController(this.database);
        this.services = new ServiceController(this.database);
        this.attendances = new AttendanceController(this.database);
    }
}
