"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceController {
    constructor(itemService) {
        this.itemService = itemService;
    }
    register(name, price) {
        this.itemService.register(name, price);
    }
    listAll() {
        return this.itemService.listAll();
    }
    isEmpty() {
        return this.itemService.isEmpty();
    }
}
exports.default = ServiceController;
