// view/BarberScreen.ts
import EntityScreen from "./EntityScreen";
import Barber from "../model/Barber";

export default class BarberScreen extends EntityScreen {

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

        this.printList(this.controller.barbers.listAll());
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
