"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Barber_1 = __importDefault(require("../model/Barber"));
class BarberService {
    constructor(database) {
        this.database = database;
    }
    register(name, phone) {
        const barber = new Barber_1.default(name, phone);
        this.database.barbers.push(barber);
        return barber;
    }
    listAll() {
        return this.database.barbers;
    }
    isEmpty() {
        return this.database.barbers.length === 0;
    }
}
exports.default = BarberService;
