// controller/BarberController.ts
// Responsável SÓ por barbeiro.
import Database from "../databases/Database";
import Barber from "../model/Barber";

export default class BarberController {

    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public register(name: string, phone: string): Barber {
        const barber = new Barber(name, phone);
        this.database.barbers.push(barber);
        return barber;
    }

    public listAll(): Barber[] {
        return this.database.barbers;
    }

    public isEmpty(): boolean {
        return this.database.barbers.length === 0;
    }
}
