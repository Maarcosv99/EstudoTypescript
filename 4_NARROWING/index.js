"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Narrowing são formas que temos de validar tipos no Typescript
// e vamos aprender, para deixar a nossa aplicação mais profissional.
// 1 - O que é Narrowing?
/*
Narrowing é um de TS para identificar tipos de dados.
Dando assim uma direção diferente a execução do programa, baseado no
tipo que foi identificado.

Há situações em que os tipos podem ser imprevisíveis, e queremos
executar algo para cada uma das possibilidades.

Isso é fundamento também para evitar erros do compilador,
identificando e resolvendo os possíveis erros na hora do desenvolvimento.
*/
// 2 - Typeof Type Guard
// O type guard é uma validação de tipo utilizando o typeof
// Desta maneira podemos comparar o retorno do operador com um possível tipo
// Todos os dados vem como, exemplo: "string", "number", "boolean"
// E a partir disso, realizamos as bifurcações
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!");
    }
}
sum("4", "59");
sum(12, 42.3);
sum("5", 6);
console.log('\n--------------------------------------------\n');
// 3 - Checando se valor existe
// Em Javascript podemos colocar uma variável em um if, e se houver
// algum valor recebemos um true. Quando não há valor, um false.
// Desta maneira conseguimos realizar o narrowing também, é uma
// outra estratégia bem utilizada.
// Narrow é mais fácil utilizando undefined no type union
function operations(arr, operation) {
    if (operation) { // Esse é nosso narrow
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([1, 4, 8], "multiply");
console.log('\n--------------------------------------------\n');
// 4 - Operador instanceof
// Para além dos tipos primitivos, podemos trabalhar com instanceof
// Checando se uma variavel pertence a uma determinada classe.
// ou seja se a variável ela extensiou de determinada classe.
// Ele vai servir até para as nossas próprias classes.
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema.`);
    }
    else if (user instanceof User) {
        console.log(`Ola ${user.name}, quais são os seus dados?`);
    }
}
userGreeting(jhon);
userGreeting(paul);
console.log('\n--------------------------------------------\n');
// 5 - Operador in
// O operador in é utilizado para checar se existe uma propriedade no objeto.
// Outro interesse interessante para o narrowing
// Pois propriedades também pode ser opcionais
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ("breed" in dog) { // Este é o narrowing
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro é um viralata");
    }
}
showDogDetails(turca);
showDogDetails(bob);
