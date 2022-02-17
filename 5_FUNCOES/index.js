"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - Funções sem retorno
/* Funçõe que não retornam valores. Neste caso
   o tipo de retorno da função é void
*/
function withoutReturn() {
    console.log("Esta função não tem retorno!");
}
withoutReturn();
console.log('\n--------------------------------------------\n');
// 2 - Callback sem argumento
/*
  Podemos inserir uma função de callback como argumento de função.
  Nela conseguimos definir o tipo de argumento aceito pela callback
  E também o tipo de retorno da mesma.
*/
function greeting(name) {
    return `Olá ${name}`;
}
// A função preegreeting quer receber em seu parâmetro "f"
// uma função que recebe a variável "name" do tipo string como parâmetro
// e retorna uma string. Em seu parâmetro showName, ela quer receber
// uma string.
function preGreeting(f, showName) {
    console.log("\nPreparando a função");
    const greet = f(showName);
    console.log(greet);
}
preGreeting(greeting, "Marcos");
preGreeting(greeting, "Viana");
console.log('\n--------------------------------------------\n');
// 3 - Generic Function
/*
  É uma estratégia para quando o tipo de retorno é relacionado ao tipo
  do argumento.
  Exemplo: Um item de um array, pode ser string, boolean ou number.
  Normalmente são utilizadas letras como T ou U para definir os generics,
  é uma convenção. Pode ser qualquer nome, mas utilizam mais o T ou U.
*/
// Arr não é um dado previsível. Porque a função é tão simples e não sabemos
// se será um array de string, boolean ou number, até porque, tanto faz
// nesta função.
// O T é qualquer valor, então, a função recebe um array de T e retorna um T.
// T são valores genêricos. Conseguimos limitar, mas ainda deixar amplo.
// Exemplo: recebemos uma lista (limitamos), mas de qualquer tipo (amplo).
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, true]));
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement([2, "b", true]));
// Recebemos 2 objetovs genêricos. U e T
// Conseguimos fazer um merge de objetos mesmo sem saber quantas
// propriedades eles terão.
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Marcos" }, { age: 30, job: "Programmer" });
console.log(newObject);
console.log('\n--------------------------------------------\n');
// 4 - Constraint em Generic Function
/*
  As Generic Functions podem ter seu escopo reduzido por constraints.
  Basicamente limitamos os tipos que podem ser utilizados no Generic
  Isso faz com que nosso escopo seja menos abrangente.

  Quanto mais restringimos na teoria é melhor, porque temos mais controle.
*/
// 2 parâmetros do mesmo tipo generic, o Typescript quer que ambas sejam iguais.
// se o parâmetro a for number, b precisa ser number.
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 9));
console.log(biggestNumber("12", "5"));
console.log('\n--------------------------------------------\n');
// 5 - Especificar tipo de argument
/*
  Em Generic Functions, temos que utilizar parâmetros de tipos semelhantes
  se não recebemos um erro. Porém há a possibilidade de determinar o tipo
  também dos parâmetros aceitos, com uma sintaxe especial.
*/
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
// O código abaixo vai dar erro, porque o primeiro array é number
// logo, ele quer que o 2º parâmetro seja array de number também
//console.log(mergeArrays([1,2,3], ["teste", "testando"]))
// Para isso fazemos
// Se você determinar os tipos aceitos, você consegue mexer na generic
console.log(mergeArrays([1, 2, 3], ["teste", "testando"]));
console.log('\n--------------------------------------------\n');
// 6 - Argumentos opcionais
/*
  Nem sempre utilizamos todos os parâmetros de uma função, mas se ele for
  opcional, precisamos declarar isso para o TS, e ainda deixar ele no
  fim da lista de parâmetros.
*/
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo boem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Marcos"));
console.log(modernGreeting("Marcos", "Chefe"));
console.log('\n--------------------------------------------\n');
// 7 - Parâmetros default
/*
  Os parâmetrs default são os que já possuem um valor definido.
  Se não passarmos para a função, é utilizado esse valor.

  Precisam estar sempre por último na lista de argumentos
*/
// Desta forma, se não preencherem m, ele coloca o valor 10
// Você pode usar o tipo por inference ou annotation.
// Não precisa informar que é opcional, porque ele já está preenchido.
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 15));
console.log('\n--------------------------------------------\n');
// 8 - O tipo Unknown
/*
  O tipo unknown é utilizado de forma semelhante ao any, ele aceita
  qualquer tipo de dado, porém a diferença é que ele não deixa algo
  ser executado se não houver validação de tipo, ou seja, adiciona
  uma trava de segurança.
*/
// Precisamos conhecer o tipo para poder utilizar o valor
// Este "conhecer" significa, saber o tipo.
function doSomething(x) {
    // Não pode, pq ele não sabe o tipo
    //console.log(x[0])
    // para funcionar, precisa fazer:
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething(["1", "2", "3"]);
doSomething(5);
console.log('\n--------------------------------------------\n');
// 9 - O tipo Never
/*
  O never é um tipo de retorno semelhante ao void.
  Porém é utilizando quando a função retor nada.
  Um exemplo: Retorno de erros
*/
// Pode fazer com void, mas neste caso é melhor never.
function showErrorMessage(msg) {
    throw new Error(msg);
}
console.log('\n--------------------------------------------\n');
//showErrorMessage("Algum erro!") Comentar para poder continuar usando o codigo
// 10 - Rest Operator com TS
/*
  Para aplicar rest operator em TS é fácil, basta definir o tipo de dado
  com a sintaxe de rest (...)

  Utilizamos rest quando não sabemso a quantidade de parâmetros que iremos
  receber

*/
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 26, 456489));
console.log('\n--------------------------------------------\n');
// 11 - Destructuring com TS
/*
  Precisamos determinar o tipo de cada dado que será desestruturado,
  desta maneira o TS valida o Destructuring.

  Destructuring é transformar as propriedades do objeto recebido
  em variáveis.
*/
// Precisamos definir o tipo que será recebido em cada variável do destructuring
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ela custa R$${price}`;
}
const shirt = { name: "Camisa", price: 13.79 };
console.log(showProductDetails(shirt));
// console.log(showProductDetails({name: "teste", age: 30}))
// console.log(showProductDetails([1, 2]))
