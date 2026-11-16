"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttendanceController {
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
    }
    register(client, barber, services, date) {
        if (date !== undefined) {
            return this.attendanceService.register(client, barber, services, date);
        }
        return this.attendanceService.register(client, barber, services);
    }
    listAll() {
        return this.attendanceService.listAll();
    }
    complete(id) {
        return this.attendanceService.complete(id);
    }
    cancel(id) {
        return this.attendanceService.cancel(id);
    }
    isEmpty() {
        return this.attendanceService.isEmpty();
    }
}
exports.default = AttendanceController;
