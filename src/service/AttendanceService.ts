import Database from "../databases/Database";
import Attendance from "../model/Attendance";
import Client from "../model/Client";
import Barber from "../model/Barber";
import Service from "../model/Service";

export default class AttendanceService {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    register(client: Client, barber: Barber, services: Service[]): Attendance;               // sem data -> usa hoje
    register(client: Client, barber: Barber, services: Service[], date: Date): Attendance;     // com data

    // implementação única por baixo
    public register(
        client: Client,
        barber: Barber,
        services: Service[],
        date?: Date
    ): Attendance {
        const dataFinal = date ?? new Date(); // se não vier data, usa a data atual

        const attendance = new Attendance(client, barber, services, dataFinal);
        this.database.attendances.push(attendance);
        return attendance;
    }

    public listAll(): Attendance[] {
        return this.database.attendances;
    }

    public getTotalByBarber(barber: Barber): number {
        return this.database.attendances
            .filter(a => a.getBarber().getId() === barber.getId())
            .reduce((total, a) => total + a.getTotalPrice(), 0);
    }

    public findById(id: number): Attendance {
    const attendance = this.database.attendances.find(a => a.getId() === id);
    if (!attendance) {
        throw new Error("Atendimento não encontrado.");
        }
    return attendance;
    }

    public complete(id: number): Attendance {
        const attendance = this.findById(id);
        attendance.complete();
        return attendance;
    }

    public cancel(id: number): Attendance {
        const attendance = this.findById(id);
        attendance.cancel();
        return attendance;
    }

    public isEmpty(): boolean {
        return this.database.attendances.length === 0;
    }
}