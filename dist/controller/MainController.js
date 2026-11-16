"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// controller/MainController.ts
// Agora ele NÃO cadastra nada direto. Ele só cria o Database
// e distribui esse mesmo Database para os controllers específicos.
const Database_1 = __importDefault(require("../databases/Database"));
const ClientService_1 = __importDefault(require("../service/ClientService"));
const BarberService_1 = __importDefault(require("../service/BarberService"));
const ItemService_1 = __importDefault(require("../service/ItemService"));
const AttendanceService_1 = __importDefault(require("../service/AttendanceService"));
const ClientController_1 = __importDefault(require("./ClientController"));
const BarberController_1 = __importDefault(require("./BarberController"));
const ServiceController_1 = __importDefault(require("./ServiceController"));
const AttendanceController_1 = __importDefault(require("./AttendanceController"));
class MainController {
    constructor() {
        const database = new Database_1.default();
        const clientService = new ClientService_1.default(database);
        const barberService = new BarberService_1.default(database);
        const itemService = new ItemService_1.default(database);
        const attendanceService = new AttendanceService_1.default(database);
        this.clients = new ClientController_1.default(clientService);
        this.barbers = new BarberController_1.default(barberService);
        this.services = new ServiceController_1.default(itemService);
        this.attendances = new AttendanceController_1.default(attendanceService);
    }
}
exports.default = MainController;
