import { expect, test } from '@jest/globals';
import Person from "../model/Person";
import Client from "../model/Client";
import Barber from "../model/Barber";

// Teste 1: herança e sobrescrita do getInfo (Person -> Client / Barber)
test("Client sobrescreve getInfo incluindo o telefone", () => {
    const client = new Client("João", "4499999-1111");
    expect(client.getInfo()).toBe(`João (#${client.getId()}) - Tel: 4499999-1111`);
});

test("Barber sobrescreve getInfo incluindo telefone e (Barbeiro)", () => {
    const barber = new Barber("Carlos", "4488888-2222");
    expect(barber.getInfo()).toBe(`Carlos (#${barber.getId()}) - Tel: 4488888-2222 (Barbeiro)`);
});

test("Person gera ids únicos e incrementais", () => {
    const first = new Person("Ana");
    const second = new Person("Bia");
    expect(second.getId()).toBe(first.getId() + 1);
});

test("Client e Barber são instâncias de Person (herança)", () => {
    expect(new Client("Lia", "1") instanceof Person).toBe(true);
    expect(new Barber("Leo", "2") instanceof Person).toBe(true);
});
