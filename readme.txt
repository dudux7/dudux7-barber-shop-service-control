iniciando projeto para barbearia.
Meu objetivo é criar um sistema em POO para controlar entrada de serviços prestados na barbearia
 por barbeiro.

Serviços
Corte de cabelo 35
Barba 30
Sobrancelha 15

classes

Cliente
- id (herdado de Pessoa)
- nome (herdado de Pessoa)
- telefone

Barbeiro
- id (herdado de Pessoa)
- nome (herdado de Pessoa)
- telefone

Servico
- nome
- preco
obs: não tem id. Em vez disso, uso uma lista estática (Service.nameExistentes)
que guarda os nomes já cadastrados e impede a criação de um serviço com nome repetido.

Atendimento
- id
- cliente
- barbeiro
- servicos (um atendimento pode ter MAIS DE UM serviço, por isso é um array)
- data


    Especialização (Herança)

                 Pessoa
                /      \
          Cliente      Barbeiro


    Cliente
   |
   | possui
   v
Atendimento
   ^
   | realiza
   |
Barbeiro

Atendimento
   |
   | possui (1 para N)
   v
Servico[]




modelo atual

Pessoa
|── id (gerado automaticamente com contador estático)
└── nome
Cliente extends Pessoa
    └── telefone
Barbeiro extends Pessoa
    └── telefone

Servico
|── nome
└── preco

Atendimento
|── id (gerado automaticamente com contador estático)
|── cliente
|── barbeiro
|── servicos (array)
└── data


estrutura real do projeto

src/
├── controller/
│   └── MainController.ts      (cadastra cliente, barbeiro, serviço e atendimento;
│                                guarda tudo no Database)
│
├── model/
│   ├── Person.ts               (classe base, id + nome)
│   ├── Client.ts                (herda de Person, adiciona telefone)
│   ├── Barber.ts                (herda de Person, adiciona telefone)
│   ├── Service.ts               (nome + preço, valida nome duplicado)
│   └── Attendance.ts            (cliente + barbeiro + serviços + data)
│
├── databases/
│   └── Database.ts             (arrays em memória: clients, barbers, services, attendances)
│
├── view/
│   └── MainScreen.ts           (menu no terminal com prompt-sync)
│
└── index.ts                     (ponto de entrada, cria o MainController)

obs: não existe (ainda) uma camada service/ separada (ClientService, BarberService,
AttendanceService). Quem faz esse papel hoje é o MainController.


Conceitos de POO usados no projeto

1. Herança
   Client e Barber herdam de Person (nome e id ficam centralizados na classe pai).

2. Encapsulamento
   Todos os atributos das classes são private, e o acesso é feito só por
   getters e setters (ex: getName(), setPhone()). Isso evita que outra parte
   do código altere os dados diretamente sem passar pelas regras da classe.

3. Abstração
   Cada classe expõe só os métodos que fazem sentido pra quem vai usá-la
   (ex: Attendance.getTotalPrice() esconde o cálculo de soma dos serviços).

4. Composição / Associação
   Attendance não herda de Client, Barber ou Service — ele guarda uma
   referência pra cada um deles. Um atendimento "tem" um cliente, um
   barbeiro e uma lista de serviços.

Outras decisões de implementação
- Contador estático (static contador) em Person e em Attendance pra gerar
  id automaticamente sem precisar controlar isso na mão.
- Validação com throw new Error(...) em Service (nome duplicado) e em
  Attendance (lista de serviços vazia).
- Métodos estáticos utilitários em Attendance: calculateTotal, isValidDate
  e formatDate.


próximos passos / pendências
- Listar barbeiros (opção 6 do menu ainda está comentada)
- Listar atendimentos
- Persistir os dados em arquivo/banco (hoje é tudo em memória, some ao fechar o programa)