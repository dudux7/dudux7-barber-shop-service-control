"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Classe barbeiro que herda da classe Pessoa
const Person_1 = __importDefault(require("./Person"));
class Barber extends Person_1.default {
    constructor(name, phone) {
        super(name);
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
}
exports.default = Barber;
