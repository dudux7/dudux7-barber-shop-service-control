"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    register(name, phone) {
        this.clientService.register(name, phone);
        //return client;
    }
    listAll() {
        return this.clientService.listAll();
    }
    isEmpty() {
        return this.clientService.isEmpty();
    }
}
exports.default = ClientController;
