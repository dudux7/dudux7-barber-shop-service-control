// view/ClientScreen.ts
// Tudo que é TELA de cliente mora aqui.
import Screen from "./Screen";
import Client from "../model/Client";

export default class ClientScreen extends Screen {

    public register(): void {
        const name = this.prompt("Digite o nome do Cliente: ");
        const phone = this.prompt("Digite o telefone do Cliente: ");

        this.controller.clients.register(name, phone);
        console.log("Cliente cadastrado com sucesso!");
    }

    public list(): void {
        if (this.controller.clients.isEmpty()) {
            console.log("Nenhum cliente cadastrado ainda.");
            return;
        }

        this.controller.clients.listAll().forEach((c, index) => {
            console.log(`${index + 1}. ${c.getName()} - ${c.getPhone()}`);
        });
    }

    // usado pela tela de atendimento
    public select(): Client {
        if (this.controller.clients.isEmpty()) {
            throw new Error("Não há clientes para selecionar");
        }

        this.list();

        const clients = this.controller.clients.listAll();
        const escolha = Number(this.prompt("Escolha o cliente (número): ").trim()) - 1;
        const client = clients[escolha];

        if (!client) {
            throw new Error("Cliente inválido");
        }

        return client;
    }
}
