// databases/Database.ts
import Client from "../model/Client";
import Barber from "../model/Barber";
import Service from "../model/Service";
import Attendance from "../model/Attendance";

export default class Database {
    public clients: Client[] = [];
    public barbers: Barber[] = [];
    public services: Service[] = [];
    public attendances: Attendance[] = [];
}