"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - Campos em classes
/*
  Em TS podemos adicionar novos campos a uma classe, ou seja, iniciar
  a classe com campos para os futuros dados dos objetos.

  Que serão as propriedades dos objetos instanciados.
  Estes campos podem ser tipados também.

  Note que um campo sem valor inicial, deve ser claro com " ! "
*/
class User {
}
const marcos = new User();
marcos.name = "Marcos";
marcos.age = 22;
console.log(marcos);
console.log('\n--------------------------------------------\n');
// 2 - Constructor
/*
  Constructor é uma função que nos dá a possibilidade de iniciar
  um objeto com valores nos seus campos.

  Isso faz com que não precisamos mais da " ! "

  Provavelmente todos os campos serão preenchidos na hora de
  instanciar um objeto.
*/
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 22);
console.log(joao);
console.log('\n--------------------------------------------\n');
// 3 - Propriedades Readonly
/*
  Podemos iniciar o campo com valor e torná-lo readonly
  Ou seja, será um valor só para consulta.

  Não poderemos alterar este valor ao longo do programa.
*/
class Car {
    constructor(name) {
        this.wheels = 4; // tipo está por inferência
        this.name = name;
    }
}
const fusca = new Car("Fusca");
// fusca.wheels = 5 -> Não altera pq é propriedade readonly
console.log(fusca);
console.log(fusca.wheels);
console.log('\n--------------------------------------------\n');
// 4 - Herança e super
/*
  Para gerar uma herança utilizamos a palavra reservada extends.

  Depois vamos precisar passar as propriedades da classe pai para ela
  quando instanciamos um objeto.

  Isso será feito com a função super.
*/
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
console.log(trator);
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name); // Envia as propriedades para o elemento pai
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(destroyer);
console.log('\n--------------------------------------------\n');
// 5 - Métodos
/*
  Métodos são como funções da classe.

  Podemos criá-los junto das classes e os objetos podem utilizá-los.

  É uma maneira de adicionar funcionalidades as classes.
*/
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log('\n--------------------------------------------\n');
// 6 - O This em classes
/*
  A palavra reservada " this " serve para nos referimos ao objeto em si.
  Ou seja, conseguimos acessar suas propriedades.
*/
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 400);
volvo.showDetails();
const scania = new Truck("Scania", 500).showDetails();
console.log('\n--------------------------------------------\n');
// 7 - Getters
/*
  Os getters são uma forma de retornar propriedades do objeto.

  Porém podemos modificá-las neste restorno, isso é muito interessante.

  Ou seja, é um método para ler propriedades.
*/
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    // com o get, automaticamente o método abaixo se transforma
    // em um getter e é obrigatório retornar alguma coisa.
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const marcosViana = new Person("Marcos", "Viana");
console.log(marcosViana.name);
// Utiliza o getter como propriedade e não método
console.log(marcosViana.fullName);
console.log('\n--------------------------------------------\n');
// 8 - Setters
/*
  Os getters leem propriedades, os setters as modificam/atribuem.

  Logo, podemos fazer validações antes de inserir uma propriedade.

  Os setters também funcionam como métodos.
*/
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
console.log(myCoords);
myCoords.fillY = 20;
console.log(myCoords);
console.log('\n--------------------------------------------\n');
class blogPost {
    constructor(title) {
        this.title = title;
    }
    // Precisa retornar string como tipamos em cima
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
const myInterface = new TestingInterface("Teste");
console.log(myInterface.itemTitle());
console.log('\n--------------------------------------------\n');
// 10 - Override de Métodos
/*
  O override é uma técnica utilizada para substituir um método
  de uma classe que herdamos algo.

  Basta criado o método com o mesmo nome na classe filha.

  Isso já caracteriza o override.
*/
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    // Isso já é override
    someMethod() {
        console.log("Testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
console.log('\n--------------------------------------------\n');
// 11 - Visibilidade
/*
  Visibilidade é o conceito de expor nossos métodos/propriedades de classes.

  public: visibilidade default, pode ser acessado em qualquer lugar.

  protected: acessível apenas a subclasses do método, para acessar
             uma propriedade precisamos de um método.

  private: apenas a classe que declarou o método pode utilizar.
*/
console.log('\n--------------------------------------------\n');
// 12 - Visibilidade: public
/*
  O public é o modo de visibilidade default (padrão).
  ou seja, já está implícito e não precisamos declarar.

  Basicamente qualquer método ou propriedade de classe pai, estará
  acessível na classe filha.
*/
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const instanceC = new C();
console.log(`C: ${instanceC.x}`);
const instanceD = new D();
console.log(`C: ${instanceD.x}`);
console.log('\n--------------------------------------------\n');
// 13 - Visibilidade: protected
/*
  Os itens protected podem ser utilizados apenas em subclasses (classe filha).

  Uma propriedade só pode acessar por um método, por exemplo.

  O mesmo acontece com métodos.

  Adicionando uma camada de segurança ao código criado em uma classe.
*/
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Este método é protegido.");
    }
}
class F extends E {
    showX() {
        console.log(`X: ${this.x}`);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const instanceF = new F();
// console.log(instanceF.x) -> Não pode acessar diretamente
instanceF.showX(); // Acessa pq é através de um método
// instanceF.protectedMethod() -> Não acessa diretamente
instanceF.showProtectedMethod(); // Mostra pq acessamos através de um método
console.log('\n--------------------------------------------\n');
// 14 - Visibilidade: private
/*
  Os itens private, propriedades e métodos, só podem ser acessados na
  classe que os definiu.

  E ainda precisam de métodos para serem acessados.
  Esta é a maior proteção para propriedades e métodos.
*/
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name) -> Não pode acessar pq é privado
console.log(pObj.showName()); // Mostra pq acessamos através de métodos da classe.
// console.log(pObj.privateMethod()) -> Não pode acessar pq é privado
pObj.showPrivateMethod(); // Acessa pq é através de um classe publica.
class TestingPrivate extends PrivateClass {
    myMethod() {
        // this.PrivateMethod() -> Só pode acessado pela classe que criou (a pai).
    }
}
console.log('\n--------------------------------------------\n');
// 15 - Static Members
/*
  Podemos criar propriedades e métodos estáticos em classes.

  Isso faz com que o acesso ou a utilização não dependam de métodos.

  Podemos utilizá-los a partir da própria classe.

  Static é para acessar a propriedade, sem instanciar a classe.

  Interessante para classes helpers ou utils
*/
class StaticMembers {
    static staticMethod() {
        console.log("Este é um método estático");
    }
}
// prop = "Teste static" -> É propriedade pública, precisa instanciar para acessar
StaticMembers.prop = "Teste static";
// console.log(StaticMembers.prop) -> Só pode acessar se instanciar
console.log(StaticMembers.prop); // Consigo acessar pq é static
StaticMembers.staticMethod(); // Acessa pq é static
console.log('\n--------------------------------------------\n');
// 16 - Generic Class
/*
  Podemos criar classes com tipos genéricos também.
  Ou seja, as propriedades dos argumentos podem ter os tipos definidos
  na hora da criação da instância.

  Isso nos permite maior flexibilidade em uma classe.
*/
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first); // O generic definiu como string por inferência
const secondItem = new Item(12, true);
console.log(secondItem);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first); // O generic definiu como string por inferência
console.log('\n--------------------------------------------\n');
// 17 - Parameter properties
/*
  Parameters properties é um recurso para definir a privacidade, nome e
  tipo das propriedades no constructor.

  Isso resumo um pouco a sintaxe das nossas classes.
*/
class ParameterProperties {
    // Definindo propriedades no constructor
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showPrice() {
        return `Qtd total: ${this.price}`;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
// console.log(newShirt.price) -> Propriedade privada.
// console.log(newShirt.qty) -> Propriedade privada
console.log(newShirt.showPrice); // Funciona pq acessa propriedades através de métodos
console.log(newShirt.showQty); // Funciona pq acessa propriedades através de métodos
console.log('\n--------------------------------------------\n');
// 18 - Class Expressions
/*
  Class Expressions é um recurso para criar uma classe anônima.
  
  Podemos também utilizar generics junto deste recurso.

  Vamos encapsular a classe em uma variável.
*/
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Marcos");
console.log(pessoa);
console.log(pessoa.name);
console.log('\n--------------------------------------------\n');
// 19 - Classe Abstrata
/*
  Abstract Class é um recurso para servir como molde de outra classe.

  Todos os métodos dela devem ser implementados nas classes que a herdam.

  E também não podemos instanciar objetos a partir destas classes.

  São classes que servem somente para passara caracteristicas para outras.
  Como se fosse o implements Interface.
*/
class AbstractClass {
}
// const newObj = new AbstractClass(); -> Não podemos instanciar classe abstrata
class AbstractExample extends AbstractClass {
    constructor(name) {
        super(); // Pegar as caracterísiticas da classe que herdamos
        this.name = name;
    }
    // Precisamos criar os métodos definidos na classe abstrata como obrigatórios
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample("Marcos");
newAbstractObject.showName();
console.log('\n--------------------------------------------\n');
// 20 - Relações entre classes
/*
  Podemos criar um objeto com base em outra classe.

  Quando as classes são idênticas o TS não reclama sobre esta ação.

  Precisamos que as duas sejam exatamente iguais.
*/
class Dog {
}
class Cat {
}
// O ts não reclama, pq ele não analisa o nome quando se fala de tipo
// ele analisa a parte interna e neste caso, são iguais.
const doguinho = new Cat();
console.log(doguinho);
