// controller/ServiceController.ts
// Responsável SÓ por serviço.
import Database from "../databases/Database";
import Service from "../model/Service";

export default class ServiceController {

    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public register(name: string, price: number): Service {
        const service = new Service(name, price);
        this.database.services.push(service);
        return service;
    }

    public listAll(): Service[] {
        return this.database.services;
    }

    public isEmpty(): boolean {
        return this.database.services.length === 0;
    }
}
