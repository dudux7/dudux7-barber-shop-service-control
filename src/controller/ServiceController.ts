import ItemService from "../service/ItemService";
import Service from "../model/Service";

export default class ServiceController {

    private itemService: ItemService;

    constructor(itemService: ItemService) {
        this.itemService = itemService;
    }

   public register(name: string, price: number): void {
        this.itemService.register(name, price);
    }

    public listAll(): Service[] {
        return this.itemService.listAll();
    }

    public isEmpty(): boolean {
        return this.itemService.isEmpty();
    }
}