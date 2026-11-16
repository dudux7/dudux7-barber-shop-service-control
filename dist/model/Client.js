"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Classe de cliente que herda da classe Pessoa
const Person_1 = __importDefault(require("./Person"));
class Client extends Person_1.default {
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
    getInfo() {
        return `${super.getInfo()} - Tel: ${this.getPhone()}`;
    }
}
exports.default = Client;
