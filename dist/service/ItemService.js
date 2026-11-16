"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = __importDefault(require("../model/Service"));
class ItemService {
    constructor(database) {
        this.database = database;
    }
    register(name, price) {
        const finalPrice = price < 0 ? 0 : price; // se o preço for negativo, seta para 0
        const service = new Service_1.default(name, finalPrice);
        this.database.services.push(service);
        return service;
    }
    listAll() {
        return this.database.services;
    }
    isEmpty() {
        return this.database.services.length === 0;
    }
}
exports.default = ItemService;
