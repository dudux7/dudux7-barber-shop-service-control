"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceStatus = void 0;
// Enum com os possíveis status de um atendimento
var AttendanceStatus;
(function (AttendanceStatus) {
    AttendanceStatus["SCHEDULED"] = "Agendado";
    AttendanceStatus["COMPLETED"] = "Conclu\u00EDdo";
    AttendanceStatus["CANCELED"] = "Cancelado";
})(AttendanceStatus || (exports.AttendanceStatus = AttendanceStatus = {}));
