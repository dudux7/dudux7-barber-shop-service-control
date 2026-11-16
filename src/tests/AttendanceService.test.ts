import { expect, test } from '@jest/globals';
import AttendanceService from "../service/AttendanceService";
import Database from "../databases/Database";
import Client from "../model/Client";
import Barber from "../model/Barber";
import Service from "../model/Service";

// Teste 3: AttendanceService (sobrecarga do register e total por barbeiro)
test("register sem data usa a data de hoje (sobrecarga)", () => {
    const service = new AttendanceService(new Database());
    const haircut = new Service("Corte (teste sem data)", 35);

    const before = Date.now();
    const attendance = service.register(new Client("João", "1"), new Barber("Carlos", "2"), [haircut]);
    const after = Date.now();

    expect(attendance.getDate().getTime()).toBeGreaterThanOrEqual(before);
    expect(attendance.getDate().getTime()).toBeLessThanOrEqual(after);
});

test("register com data usa a data informada (sobrecarga)", () => {
    const service = new AttendanceService(new Database());
    const eyebrow = new Service("Sobrancelha (teste com data)", 15);
    const date = new Date(2026, 9, 19);

    const attendance = service.register(new Client("João", "1"), new Barber("Carlos", "2"), [eyebrow], date);

    expect(attendance.getDate()).toBe(date);
});

test("register guarda o atendimento no banco", () => {
    const service = new AttendanceService(new Database());
    expect(service.isEmpty()).toBe(true);

    service.register(new Client("João", "1"), new Barber("Carlos", "2"), [new Service("Corte (teste banco)", 35)]);

    expect(service.isEmpty()).toBe(false);
    expect(service.listAll().length).toBe(1);
});

test("getTotalByBarber soma só os atendimentos do barbeiro informado", () => {
    const service = new AttendanceService(new Database());
    const client = new Client("João", "1");
    const carlos = new Barber("Carlos", "2");
    const pedro = new Barber("Pedro", "3");
    const haircut = new Service("Corte (teste total barbeiro)", 35);
    const beard = new Service("Barba (teste total barbeiro)", 30);

    service.register(client, carlos, [haircut]);        // 35
    service.register(client, carlos, [haircut, beard]); // 65
    service.register(client, pedro, [beard]);           // 30 (não conta pro Carlos)

    expect(service.getTotalByBarber(carlos)).toBe(100);
    expect(service.getTotalByBarber(pedro)).toBe(30);
});
