// model/Describable.ts
// INTERFACE: um contrato. Quem fizer "implements Describable" é obrigado a ter getInfo().
// A interface só diz O QUE a classe precisa ter, não COMO funciona.
// Assim, classes sem parentesco (Person e Service) podem ser tratadas do mesmo jeito.
export default interface Describable {
    getInfo(): string;
}
