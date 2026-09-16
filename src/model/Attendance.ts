//Classe Atendimento
import Client from "./Client";
import Barber from "./Barber";
import Service from "./Service";

export default class Attendance {

    //static para criar um contador de ids
    //toda vez que o constructor roda, ele incrementa Attendance.contador++ e usa o valor novo como id.
    //isso garante que o id de cada atendimento é único
    private static contador: number = 0;

    private id: number;
    private client: Client;
    private barber: Barber;
    private services: Service[];
    private date: Date;

    constructor(
        client: Client,
        barber: Barber,
        services: Service[],
        date: Date
    ) {
        if (services.length === 0) {
            //Se o array de serviços estiver vazio, ele lança um erro e não permite criar o atendimento
            throw new Error("Um atendimento precisa ter pelo menos um serviço.");
        }

        Attendance.contador++;
        this.id = Attendance.contador;
        this.client = client;
        this.barber = barber;
        this.services = services;
        this.date = date;
    }

    public getId(): number {
        return this.id;
    }

    public getClient(): Client {
        return this.client;
    }

    public getBarber(): Barber {
        return this.barber;
    }

    public getServices(): Service[] {
        return this.services;
    }

    public getDate(): Date {
        return this.date;
    }

    public getTotalPrice(): number {
        return this.services.reduce((sum, service) => sum + service.getPrice(), 0);
        // reduce : uma lista de serviços vira um único número, trasforma o array em um único valor
        // a função reduce percorre todos os serviços do array e soma o valor de cada serviço, retornando o valor total do atendimento
        
        // let sum = 0;
        //for (const service of this.services) {
            //sum = sum + service.getPrice();
        //}
        //return sum;
    }

     public static calculateTotal(services: Service[]): number {
        return services.reduce((soma, servico) => soma + servico.getPrice(), 0);
    }

    // valida se a string digitada vira uma data real
    public static isValidDate(date: Date): boolean {
        return !isNaN(date.getTime());
    }

    // formata a data pro padrão brasileiro dd/mm/aaaa
    public static formatDate(date: Date): string {
        const dia = String(date.getDate()).padStart(2, "0");
        const mes = String(date.getMonth() + 1).padStart(2, "0"); // mês começa em 0
        const ano = date.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
}