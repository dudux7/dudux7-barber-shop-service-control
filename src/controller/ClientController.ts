
import ClientService from "../service/ClientService";
import Client from "../model/Client";

export default class ClientController {

    private clientService: ClientService;

    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }
    
    public register(name: string, phone: string): void {
        this.clientService.register(name, phone);
        //return client;
    }

    public listAll(): Client[] {
        return this.clientService.listAll();
    }

    public isEmpty(): boolean {
        return this.clientService.isEmpty();
    }
}
