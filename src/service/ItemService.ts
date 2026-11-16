import Database from "../databases/Database";
import Service from "../model/Service";

export default class ItemService {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public register(name: string, price: number): Service {
        const finalPrice = price < 0 ? 0 : price; // se o preço for negativo, seta para 0
        const service = new Service(name, finalPrice);
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