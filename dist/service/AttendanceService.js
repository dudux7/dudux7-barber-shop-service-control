"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Attendance_1 = __importDefault(require("../model/Attendance"));
class AttendanceService {
    constructor(database) {
        this.database = database;
    }
    // implementação única por baixo
    register(client, barber, services, date) {
        const dataFinal = date ?? new Date(); // se não vier data, usa a data atual
        const attendance = new Attendance_1.default(client, barber, services, dataFinal);
        this.database.attendances.push(attendance);
        return attendance;
    }
    listAll() {
        return this.database.attendances;
    }
    getTotalByBarber(barber) {
        return this.database.attendances
            .filter(a => a.getBarber().getId() === barber.getId())
            .reduce((total, a) => total + a.getTotalPrice(), 0);
    }
    findById(id) {
        const attendance = this.database.attendances.find(a => a.getId() === id);
        if (!attendance) {
            throw new Error("Atendimento não encontrado.");
        }
        return attendance;
    }
    complete(id) {
        const attendance = this.findById(id);
        attendance.complete();
        return attendance;
    }
    cancel(id) {
        const attendance = this.findById(id);
        attendance.cancel();
        return attendance;
    }
    isEmpty() {
        return this.database.attendances.length === 0;
    }
}
exports.default = AttendanceService;
