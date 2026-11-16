import AttendanceService from "../service/AttendanceService";
import Client from "../model/Client";
import Barber from "../model/Barber";
import Service from "../model/Service";
import Attendance from "../model/Attendance";

export default class AttendanceController {

    constructor(private attendanceService: AttendanceService) {}

    public register(
        client: Client,
        barber: Barber,
        services: Service[]
    ): Attendance;

    public register(
        client: Client,
        barber: Barber,
        services: Service[],
        date: Date
    ): Attendance;

    public register(
        client: Client,
        barber: Barber,
        services: Service[],
        date?: Date
    ): Attendance {

        if (date !== undefined) {
            return this.attendanceService.register(
                client,
                barber,
                services,
                date
            );
        }

        return this.attendanceService.register(
            client,
            barber,
            services
        );
    }

    public listAll(): Attendance[] {
        return this.attendanceService.listAll();
    }

    public complete(id: number): Attendance {
    return this.attendanceService.complete(id);
    }

    public cancel(id: number): Attendance {
        return this.attendanceService.cancel(id);
    }

    public isEmpty(): boolean {
        return this.attendanceService.isEmpty();
    }
}