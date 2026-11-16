import Database from "../databases/Database";
import Client from "../model/Client";

export default class ClientService {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public register(name: string, phone: string): Client {
        const client = new Client(name, phone);
        this.database.clients.push(client);
        return client;
    }

    public listAll(): Client[] {
        return this.database.clients;
    }

    public isEmpty(): boolean {
        return this.database.clients.length === 0;
    }
}