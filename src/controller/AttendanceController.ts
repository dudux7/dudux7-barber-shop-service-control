// controller/AttendanceController.ts
// Responsável SÓ por atendimento.
import Database from "../databases/Database";
import Client from "../model/Client";
import Barber from "../model/Barber";
import Service from "../model/Service";
import Attendance from "../model/Attendance";

export default class AttendanceController {

    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public register(
        client: Client,
        barber: Barber,
        services: Service[],
        date: Date
    ): Attendance {
        const attendance = new Attendance(client, barber, services, date);
        this.database.attendances.push(attendance);
        return attendance;
    }

    public listAll(): Attendance[] {
        return this.database.attendances;
    }

    public isEmpty(): boolean {
        return this.database.attendances.length === 0;
    }
}
