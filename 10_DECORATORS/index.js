"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - O que são os decorators?
/*
  Decorators podem adicionar funcionalidades extras a classes e funções.

  Basicamente criamos novas funções, que são adicionadas a partir
  de um @nome

  Esta função será chamada assim que o item que foi definido o decorator
  for executado.

  Para habilitar precisamos adicionar uma configuração no tsconfig.json
  Configuração porque ele é novo e precisa ser habilitado.

  A configuração é, descomentar o "experimentalDecorators" do arquivo
  tsconfig.json

  Exemplo:
  Decorator baseado em classe, que é executado quando o constructor
  for executado. Daí ele tem a oportunidade de realizar algo ali.
*/
console.log('\n--------------------------------------------\n');
// 2 - Criando o primeiro decorator
/*
  Vamos criar um decorator como uma function.
  Ele pode trabalhar com argumentos especiais que são:?
  target, porpertyKey e descriptor

  Estes são os grandes trunfos do decorator, pois nos dão informação
  do local em que ele foi executado.
*/
// Decorator pode receber parâmetro
function myDecorator() {
    console.log("Iniciando decorator!"); // Inicia primeiro
    // Função que um decorator retorna.
    // Precisa ter a função e estes parâmetros para se tornar um decorator
    // no target podemos dizer o tipo do objeto que está recebendo o decorator
    // neste caso, poderiamos colocar target: Function
    return function (target, porpertyKey, descriptor) {
        console.log("Executando decorator!"); // Inicia 2º
        console.log(target); // Retorna a função
        console.log(porpertyKey); // Nome da função que possui o decorator
        console.log(descriptor); // Dados da variável que recebe o decorator
    };
}
class myClass {
    // Adicionando decorator
    testing() {
        // Executa só depois que o decorator termina
        console.log("Terminando execução do método!");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
console.log('\n--------------------------------------------\n');
// 3 - Múltiplos decorators
/*
  Podemos utilizar múltiplos decorators em TS.

  O primeiro a ser executado é o que está mais próximo da função.

  @c
  @a
  @b
  function

  Ordem de execução: b -> a -> c

  Desta maneira é possível criar operações mais complexas.

  Ajuda também na separação de responsabilidade.
*/
function a() {
    return function (target, porpertyKey, descriptor) {
        console.log("Executou A");
    };
}
function b() {
    return function (target, porpertyKey, descriptor) {
        console.log("Executou B");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    b(),
    a()
], MultipleDecorators.prototype, "testing", null);
new MultipleDecorators().testing();
console.log('\n--------------------------------------------\n');
// 4 - Class Decorators
/*
  O decorator de classe está ligado ao constructor.

  Ou seja, sempre que o constructor for executado, teremos a exeução do decorator.

  Isso nos permite acrescentar algo a criação de classes.
*/
// Maneira mais correta de escrever um class decorator
function classDecorator(constructor) {
    console.log(constructor.name); // Imprime classe com constructor
    // Constructor.name é o nome da classe
    if (constructor.name == "User") {
        console.log("Criando usuário!");
    }
}
// Colocamos o decorator na classe
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const marcos = new User("Marcos");
console.log(marcos);
console.log('\n--------------------------------------------\n');
// 5 - Decorator de Método
/*
  Com este decorator podemos modificar a execução de métodos.

  Precisamos inserir o deocrator antes da declaração do método.

  Ele é executado antes do método.
*/
function enumerable(value) {
    return function (target, porpertyKey, descriptor) {
        // Se descriptor.enumerable for false, ele deixa o método.
        // invisível (se der console.log)
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
console.log('\n--------------------------------------------\n');
// 6 - Acessor Decorator
/*
  Semelhante ao decorator de método.
  Porém este serve apenas para os getters e setters.

  Podemos alterar a execução antes de um set  ou get.
*/
class Monster {
    constructor(name, age) {
        if (name) {
            this.name = name;
        }
        if (age) {
            this.age = age;
        }
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true) // showName fica visível, sendo que já é por padrão.
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false) // showAge fica invisível
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
console.log('\n--------------------------------------------\n');
// 7 - Property Decorator
/*
  O property decorator é utilizado nas propriedades de um classe.
  ou seja, na hora da definição da mesma podemos ativar uma função.

  Isso nos ajuda a modificar ou validar algum valor.
*/
// Vamos modificar o id para 0001
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0"); // Colocando 5 zeros na frente do valor
        };
        // Aqui fazemos uma alteração no objeto
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem.id);
console.log('\n--------------------------------------------\n');
// 8 - Exemplo real: Class Decorator
/*
  Com Class Decorator podemos influenciar o constructor.
  Neste exemplo vamos criar uma função para inserir data de criação dos objetos.
*/
function createdDate(created) {
    // Pegamos o objeto, colocamos um nova propriedade nele
    // que será chamada createdAt e recebe new Data como valor.
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
console.log(newBook.createdAt);
const newPen = new Pen(24);
console.log(newPen.createdAt);
console.log('\n--------------------------------------------\n');
// 9 - Exemplo real: Method Decorator
/*
  Com Method Decorator podemos alterar a execução dos métodos.

  Neste exemplo vamos verificar se um usuário pode ou não fazer
  uma alteração no sistema.

  A alteração seria o método a ser executado.
*/
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value; // Pegamos a função
        // Pega a função e todos os argumentos dela
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já postou!");
                return null;
            }
            else {
                // Retorna a função para que ele volte a funcionar normalmente
                // já que paramos ela.
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        if (alreadyPosted === false) {
            this.alreadyPosted = true;
            console.log(`Post do usuário: ${content}`);
        }
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu segundo post!", newPost.alreadyPosted);
newPost.post("Meu terceiro post!", newPost.alreadyPosted);
console.log('\n--------------------------------------------\n');
// 10 - Exemplo real: Property Decorator
/*
  Com o Property Decorator conseguimos verificar uma
  propriedade de um objeto.

  Vamos criar uma validação de um número máximo de
  caracteres com decorators.
*/
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} caracteres.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const pedro = new Admin("pedroadmin1234");
const marcosAdmin = new Admin("marcos");
console.log(marcosAdmin.username);
