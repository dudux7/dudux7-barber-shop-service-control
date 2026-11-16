import BarberService from "../service/BarberService";
import Barber from "../model/Barber";

export default class BarberController {

    private barberService: BarberService;

    constructor(barberService: BarberService) {
        this.barberService = barberService;
    }

    public register(name: string, phone: string): void {
        this.barberService.register(name, phone);
        //return this.barberService.register(name, phone);
    }

    public listAll(): Barber[] {
        return this.barberService.listAll();
    }

    public isEmpty(): boolean {
        return this.barberService.isEmpty();
    }
}