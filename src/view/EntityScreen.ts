// view/EntityScreen.ts
// Classe ABSTRATA intermediária: serve de modelo para as telas que cuidam de uma entidade
// (cliente, barbeiro, serviço e atendimento).
// Ela herda de Screen (então já tem o prompt, o controller e o pause) e ainda
// OBRIGA cada tela filha a implementar register() e list().
// Se uma filha não implementar os dois métodos, o TypeScript dá erro de compilação.
// Não dá para fazer "new EntityScreen(...)": só as filhas podem ser instanciadas.
import Screen from "./Screen";
import Describable from "../model/Describable";

export default abstract class EntityScreen extends Screen {

    // métodos abstratos: não têm corpo aqui, cada tela filha escreve o seu
    abstract register(): void;
    abstract list(): void;

    // método CONCRETO (já implementado), herdado por todas as filhas.
    // Recebe qualquer lista de Describable: Client, Barber ou Service, não importa qual.
    // Isso é polimorfismo via interface: só precisa saber que o item tem getInfo().
    protected printList(items: Describable[]): void {
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.getInfo()}`);
        });
    }
}
