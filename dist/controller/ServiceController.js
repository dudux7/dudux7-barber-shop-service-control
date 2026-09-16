"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = __importDefault(require("../model/Service"));
class ServiceController {
    constructor(database) {
        this.database = database;
    }
    register(name, price) {
        const service = new Service_1.default(name, price);
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
exports.default = ServiceController;
