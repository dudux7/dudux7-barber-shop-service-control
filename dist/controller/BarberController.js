"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BarberController {
    constructor(barberService) {
        this.barberService = barberService;
    }
    register(name, phone) {
        this.barberService.register(name, phone);
        //return this.barberService.register(name, phone);
    }
    listAll() {
        return this.barberService.listAll();
    }
    isEmpty() {
        return this.barberService.isEmpty();
    }
}
exports.default = BarberController;
