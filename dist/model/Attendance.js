"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _AttendanceStatus_1 = require("./ AttendanceStatus");
class Attendance {
    constructor(client, barber, services, date) {
        if (services.length === 0) {
            //Se o array de serviços estiver vazio, ele lança um erro e não permite criar o atendimento
            throw new Error("Um atendimento precisa ter pelo menos um serviço.");
        }
        Attendance.contador++;
        this.id = Attendance.contador;
        this.client = client;
        this.barber = barber;
        this.services = services;
        this.date = date;
        this.status = _AttendanceStatus_1.AttendanceStatus.SCHEDULED;
    }
    getId() {
        return this.id;
    }
    getClient() {
        return this.client;
    }
    getBarber() {
        return this.barber;
    }
    getServices() {
        return this.services;
    }
    getDate() {
        return this.date;
    }
    getTotalPrice() {
        return this.services.reduce((sum, service) => sum + service.getPrice(), 0);
        // reduce : uma lista de serviços vira um único número, trasforma o array em um único valor
        // a função reduce percorre todos os serviços do array e soma o valor de cada serviço, retornando o valor total do atendimento
        // let sum = 0;
        //for (const service of this.services) {
        //sum = sum + service.getPrice();
        //}
        //return sum;
    }
    static TotalPrice(services) {
        return services.reduce((sum, service) => sum + service.getPrice(), 0);
    }
    // valida se a string digitada vira uma data real
    static isValidDate(date) {
        return !isNaN(date.getTime());
    }
    // formata a data pro padrão brasileiro dd/mm/aaaa
    static formatDate(date) {
        const dia = String(date.getDate()).padStart(2, "0");
        const mes = String(date.getMonth() + 1).padStart(2, "0"); // mês começa em 0
        const ano = date.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
    getStatus() {
        return this.status;
    }
    complete() {
        if (this.status === _AttendanceStatus_1.AttendanceStatus.CANCELED) {
            throw new Error("Não é possível concluir um atendimento cancelado.");
        }
        this.status = _AttendanceStatus_1.AttendanceStatus.COMPLETED;
    }
    cancel() {
        if (this.status === _AttendanceStatus_1.AttendanceStatus.COMPLETED) {
            throw new Error("Não é possível cancelar um atendimento concluído.");
        }
        this.status = _AttendanceStatus_1.AttendanceStatus.CANCELED;
    }
}
//static para criar um contador de ids
//toda vez que o constructor roda, ele incrementa Attendance.contador++ e usa o valor novo como id.
//isso garante que o id de cada atendimento é único
Attendance.contador = 0;
exports.default = Attendance;
