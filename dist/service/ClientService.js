"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("../model/Client"));
class ClientService {
    constructor(database) {
        this.database = database;
    }
    register(name, phone) {
        const client = new Client_1.default(name, phone);
        this.database.clients.push(client);
        return client;
    }
    listAll() {
        return this.database.clients;
    }
    isEmpty() {
        return this.database.clients.length === 0;
    }
}
exports.default = ClientService;
