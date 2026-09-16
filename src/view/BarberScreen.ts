// view/BarberScreen.ts
import Screen from "./Screen";
import Barber from "../model/Barber";

export default class BarberScreen extends Screen {

    public register(): void {
        const name = this.prompt("Digite o nome do Barbeiro: ");
        const phone = this.prompt("Digite o telefone do Barbeiro: ");

        this.controller.barbers.register(name, phone);
        console.log("Barbeiro cadastrado com sucesso!");
    }

    public list(): void {
        if (this.controller.barbers.isEmpty()) {
            console.log("Nenhum barbeiro cadastrado ainda.");
            return;
        }

        this.controller.barbers.listAll().forEach((b, index) => {
            console.log(`${index + 1}. ${b.getName()} - ${b.getPhone()}`);
        });
    }

    public select(): Barber {
        if (this.controller.barbers.isEmpty()) {
            throw new Error("Não há barbeiros para selecionar");
        }

        this.list();

        const barbers = this.controller.barbers.listAll();
        const escolha = Number(this.prompt("Escolha o barbeiro (número): ").trim()) - 1;
        const barber = barbers[escolha];

        if (!barber) {
            throw new Error("Barbeiro inválido");
        }

        return barber;
    }
}
