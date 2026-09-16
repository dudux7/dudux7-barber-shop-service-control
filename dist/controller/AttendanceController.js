"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Attendance_1 = __importDefault(require("../model/Attendance"));
class AttendanceController {
    constructor(database) {
        this.database = database;
    }
    register(client, barber, services, date) {
        const attendance = new Attendance_1.default(client, barber, services, date);
        this.database.attendances.push(attendance);
        return attendance;
    }
    listAll() {
        return this.database.attendances;
    }
    isEmpty() {
        return this.database.attendances.length === 0;
    }
}
exports.default = AttendanceController;
