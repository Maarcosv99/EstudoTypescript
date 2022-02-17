export {}

// 1 - Arrays
// Lista costumam ter o mesmo tipo.
let numbers: number[] = [1,2,3]
numbers.push(5)

console.log(numbers)

let nomes: string[] = ["Marcos", "Viana"]
console.log(nomes)

console.log('\n--------------------------------------------\n')

// 2 - Outra Sintaxe de Arrays
// Usamos a interface Array, onde o
// formato de interface é: Interface<tipo>
const numbersNewArray: Array<number> = [1,2,3]
console.log(numbersNewArray)
console.log(typeof numbersNewArray)

console.log('\n--------------------------------------------\n')

// 3 - Any
// O any serve para qualquer tipo de variável.
// Devemos evitar ao máximo utilizar any, pois é
// contra os principios do typescript.

// Três casos de uso:
// Quando o tipo de dado não importa ou
// array com dados de múltiplos tipos ou
// quando os dados vem de uma api externa.
const arr1: any = [1, "teste", true, [], {nome: "Marcos"}]
console.log(arr1)
arr1.push([1,2,3])
console.log(arr1)

console.log('\n--------------------------------------------\n')

// 4 - Tipo de parâmetro
function soma(a: number, b: number) {
  return a + b
}
console.log(soma(2,5))

console.log('\n--------------------------------------------\n')

// 5 - Tipo de retorno
// O typescript não reclama do tipo de retorno
// mas é legal que você declare ele.

function greeting(name: string): string {
  // A função só pode retornar string
  return `Olá ${name}`
}

console.log(greeting("Marcos"))

console.log('\n--------------------------------------------\n');

// 6 - Funções Anônimas
// O Typescript faz uma validação do código digitado,
// nos fornecendo dicas de possíveis problemas.

setTimeout(() => {
  const sallary: number = 1000
  // console.log(parseFloat(sallary)) Erro, pq parseFloat recebe string
  // console.log(`Salário: ${sallary}`)
}, 0)

console.log('\n--------------------------------------------\n');

// 7 - Tipos de objetos
// Determinamos quais tipos as propriedades que um objeto possui
// Sintaxe: { prop: tipo, prop2?: tipo2 }
function passCoordinates(coord: {x: number, y: number}) {
  console.log(`X coordinates: ${coord.x}`)
  console.log(`Y coordinates: ${coord.y}`)
}

const objCoord = {x: 239, y: 548}
passCoordinates(objCoord)
// passCoordinates({x: 239, y: 548 })

const pessoaObj: {name: string, surname: string} = {
  name: "Marcos",
  surname: "Viana"
}

console.log('\n--------------------------------------------\n');

// 8 - Propriedades opcionais
// Nem sempre os objetos possuem todas as propriedades que poderiam possuir
// Sintaxe: { prop?: tipo}

function showNumbers(a: number, b: number, c: number) {
  console.log(`A: ${a}`)
  console.log(`B: ${b}`)
  if (c) {
    console.log(`C: ${c}`)
  }
}

showNumbers(1,2,3)
// showNumbers(4,5) Erro, pq precisa do parâmetro c

function showNumbers2(a: number, b: number, c?: number) {
  console.log(`A: ${a}`)
  console.log(`B: ${b}`)
  console.log(`C: ${c}`)
}

showNumbers2(4,5) // Nesta função, c é opcional, retorna undefined, mas espera a e b

console.log('\n--------------------------------------------\n');

// 9 - Validação de parâmetro opcional
// Isto é por nossa conta, e utilizaremos o if
// O primeiro argumento não pode ser opcional
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    // Isso é um early return
    return `Olá ${firstName} ${lastName}, tudo bem?`
  }

  return `Olá ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Marcos", "Viana"))
console.log(advancedGreeting("Teste"))

console.log('\n--------------------------------------------\n');

// 10 - Union Type
// É uma alternativa melhor do que o any
// podemos determinar dois tipos para um dado
// A sintaxe: type1 | type2

// O parâmetro balance pode receber string ou number
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$ ${balance}`)
}

showBalance(10)
showBalance("500")

const arr2: Array<number | string | boolean> = [true, 1, "teste"]

console.log('\n--------------------------------------------\n');

// 11 - Avançando em Union Types
// Podemos utilizar condicionais para validação do tipo de union types
// com isso é possível trilhar rumos diferentes, baseado no tipo de dado
// Para checar o tipo utilizamos o typeof

function showUserRole(role: boolean | string) {
  if (typeof role == "boolean") {
    return "Usuário não aprovado"
  }

  return `A função do usuário é: ${role}`
}

console.log(showUserRole(true))
console.log(showUserRole("admin"))

console.log('\n--------------------------------------------\n');

// 12 - Type alias
// É um recurso que permite criar um tipo e determinar o que ele verifica
// Desta maneira temos uma forma mais fácil de chamá-lo em vez de criar
// expressões complexas com Union types, por exemplo

// Type union
function showId(id: string | number) {
  console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")

// Type alias
type ID = string | number

function showId2(id: ID) {
  console.log(`O ID é: ${id} | Type Alias`)
}

showId2(2)
showId2("300")

console.log('\n--------------------------------------------\n');

// 13 - Introdução as Interfaces
// Uma outra maneira de nomear um tipo de objeto.
// Podemos determinar um nome para o tipo
// E também escolher quais propriedades e seus tipos
// > É bastante utilizado pelos programadores
// Utilizamos normalmente para objetos

interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x}`)
  console.log(`Y: ${obj.y}`)
  console.log(`Z: ${obj.z}`)
}

const coordObj: Point = {
  x:1,
  y:2,
  z:3
}

showCoords(coordObj)

console.log('\n--------------------------------------------\n');

// 14 - Type Alias x Interface
/*
  Na maioria das vezes podemos optar por qualquer um dos recursos sem problemas.
  A única diferença é que a Interface pode ser alterada ao longo do código, já
  o alias não.
  Ou seja, se pretendemos mudar como o tipo se conforma, utilizamos Interface.

  É como se type fosse const, e interface fosse let.
*/

interface Person {
  name: string
}

interface Person {
  age: number
}

// const somePerson: Person = { name: "Marcos" } vai dar erro, pq precisa do age
const somePerson: Person = { name: "Marcos", age: 22 }
console.log(somePerson)

console.log('\n--------------------------------------------\n');

// 15 - Literal Types
// É um recurso que permite colocar valores como tipos.
// Isso restringe o uso a não só tipos, como também os próprios valores.
// É muito utilizando com Union types.

let test: "testando"
// test = 1 // Erro pq precisa ser o valor "testando"

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é: ${direction}`)
}

showDirection("left")

type Direction = "left" | "right" | "center"

function showDirection2(direction: Direction) {
  console.log(`A direção é: ${direction}`)
}

showDirection("center")

console.log('\n--------------------------------------------\n');

// 16 - Non null assertion operator
// Às vezes o Typescript pode evidenciar um erro, baseado em um valor
// que no momento do código ainda não está disponível.
// Porém se sabemos que este valor será preenchido, podemos evitar o erro.
// Utilizamos o caracteres "!"
// Normalmente utilizad quando mechemos no DOM Html

// const p = document.getElementById("some-p")
// console.log(p.innerText) Erro porque não sabe se o elemento será capturado ou se existe
// console.log(p!.innerText) Agora confirmamos que ele vai capturar sim, este elemento.

console.log('\n--------------------------------------------\n');

// 17 - BigInt
// Com o tipo bigint podemos declarar números com valores muito altos
// Podemos utilizar a notação literal, exemplo: 100n
// Para este recurso precisamos mudar a configuração do TS, para a versão
// mínima de ES2020 no Target do tsconfig.json

let n: bigint
// Ele não aceita números como 10, 11, 12.34

n = 1000n // Funciona pq mudei o target para es2020

console.log('\n--------------------------------------------\n');

// 18 - Symbol
// Funciona no es2020
// De forma resumida, o Symbol cria uma referência única para um valor
// ou seja, mesmo que ele possua o mesmo valor de outra variável,
// teremos valores sendo considerados diferentes.

// Se temos uma variável com valor "Marcos" e outra variável com o valor "Marcos"
// através do Symbol, as 2 ficam diferentes.

let symbolA = Symbol("Marcos")
let symbolB = Symbol("Marcos")

console.log(symbolA === symbolB) // false