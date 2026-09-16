"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// controller/MainController.ts
// Agora ele NÃO cadastra nada direto. Ele só cria o Database
// e distribui esse mesmo Database para os controllers específicos.
const Database_1 = __importDefault(require("../databases/Database"));
const ClientController_1 = __importDefault(require("./ClientController"));
const BarberController_1 = __importDefault(require("./BarberController"));
const ServiceController_1 = __importDefault(require("./ServiceController"));
const AttendanceController_1 = __importDefault(require("./AttendanceController"));
class MainController {
    constructor() {
        this.database = new Database_1.default();
        // todos recebem O MESMO Database, então compartilham os dados
        this.clients = new ClientController_1.default(this.database);
        this.barbers = new BarberController_1.default(this.database);
        this.services = new ServiceController_1.default(this.database);
        this.attendances = new AttendanceController_1.default(this.database);
    }
}
exports.default = MainController;
