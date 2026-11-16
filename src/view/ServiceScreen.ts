// view/ServiceScreen.ts
import EntityScreen from "./EntityScreen";
import Service from "../model/Service";

export default class ServiceScreen extends EntityScreen {

    public register(): void {
        const name = this.prompt("Digite o nome do Serviço: ");
        const price = Number(this.prompt("Digite o preço do Serviço: "));

        this.controller.services.register(name, price);
        console.log("Serviço cadastrado com sucesso!");
    }

    public list(): void {
        if (this.controller.services.isEmpty()) {
            console.log("Nenhum serviço cadastrado ainda.");
            return;
        }

        this.printList(this.controller.services.listAll());
    }

    // permite escolher VÁRIOS serviços, ex: 1,3
    public selectMany(): Service[] {
        if (this.controller.services.isEmpty()) {
            throw new Error("Não há serviços para selecionar");
        }

        this.list();

        const services = this.controller.services.listAll();
        const escolhas = this.prompt(
            "Escolha os serviços (números separados por vírgula, ex: 1,3): "
        );

        const escolhidos = escolhas
            .split(",")
            .map(numero => services[Number(numero.trim()) - 1])
            .filter(servico => servico !== undefined);

        if (escolhidos.length === 0) {
            throw new Error("Nenhum serviço válido selecionado");
        }

        return escolhidos;
    }
}
