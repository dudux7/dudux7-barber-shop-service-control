import { expect, test } from '@jest/globals';
import Describable from "../model/Describable";
import Client from "../model/Client";
import Barber from "../model/Barber";
import Service from "../model/Service";

// Teste: interface + polimorfismo
// Client, Barber e Service não têm a mesma classe pai, mas todos cumprem o contrato Describable.
test("Client, Barber e Service podem ser tratados como Describable", () => {
    const cliente: Describable = new Client("Ana", "4499999-0000");
    const barbeiro: Describable = new Barber("Beto", "4488888-0000");
    const servico: Describable = new Service("Corte (teste interface)", 35);

    // o mesmo método (getInfo) funciona nos três, mesmo sem terem a mesma classe pai
    const itens: Describable[] = [cliente, barbeiro, servico];
    expect(itens.map(i => i.getInfo())).toHaveLength(3);

    expect(cliente.getInfo()).toContain("Ana");
    expect(barbeiro.getInfo()).toContain("(Barbeiro)");
    expect(servico.getInfo()).toBe("Corte (teste interface) - R$35");
});
