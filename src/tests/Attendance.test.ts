import { expect, test } from '@jest/globals';
import Attendance from "../model/Attendance";
import Client from "../model/Client";
import Barber from "../model/Barber";
import Service from "../model/Service";

// Teste 2: regras do model Attendance (total, validação e data)
const client = new Client("João", "4499999-1111");
const barber = new Barber("Carlos", "4488888-2222");

test("getTotalPrice soma o preço de todos os serviços", () => {
    const haircut = new Service("Corte de cabelo (teste total)", 35);
    const beard = new Service("Barba (teste total)", 30);
    const attendance = new Attendance(client, barber, [haircut, beard], new Date(2026, 9, 19));
    expect(attendance.getTotalPrice()).toBe(65);
});

test("não permite criar atendimento sem serviços", () => {
    expect(() => new Attendance(client, barber, [], new Date()))
        .toThrow("Um atendimento precisa ter pelo menos um serviço.");
});

test("formatDate formata a data no padrão dd/mm/aaaa", () => {
    // mês começa em 0 no JavaScript: 4 = maio
    expect(Attendance.formatDate(new Date(2026, 4, 7))).toBe("07/05/2026");
});

test("isValidDate reconhece datas válidas e inválidas", () => {
    expect(Attendance.isValidDate(new Date(2026, 0, 1))).toBe(true);
    expect(Attendance.isValidDate(new Date("data-invalida"))).toBe(false);
});
