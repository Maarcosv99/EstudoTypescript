export {}

// 1 - Object Types
/*
  São os dados que tem como o tipo de objeto, por exemplo:
  Object Literals e Arrays.

  Temos diversos recursos para explorar estes tipos, como:
  Interfaces, Readonly, Tupla e outros
*/

// 2 - Interface como parâmetro
/*
  Um caso de uso para interfaces é simplificar os parâmetros
  de objeto de funções, ou seja, em vez de passar parâmetros
  de um objeto longo para n funções, passamos apenas a interface
*/

interface Product {
  name: string
  price: number
  isAvailable: boolean
}

// Sem interface, precisariamos sempre informar os mesmos parâmetros para
// todas as funções que recebe aquele objeto.
//function showProductDetails(name: string, price: number, isAvailable: boolean) {}
// Simplificamos fazendo assim:
function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
  if (product.isAvailable) {
    console.log("O produto está disponível!")
  }
}

const camiseta: Product = {name: "Tshirt", price: 19.90, isAvailable: true }
showProductDetails(camiseta)
showProductDetails({name: "Tênis", price: 147.50, isAvailable: false})

console.log('\n--------------------------------------------\n');

// 2 - Interface com parâmetro opcional
/*
  As interfaces podem conter propriedades de objeto opcionais.
  Basta adicionar a interrogação no nome da propriedade.
  Sintaxe: prop?: type
*/

interface User {
  email: string,
  role?: string
}

function showUserDetails(user: User): void {
  console.log(`O email do usuário é: ${user.email}`)
  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`)
  }
}

const u1:User = {email: "marcosvianacdc@gmail.com", role: "Admin"}
const u2:User = {email: "teste@mail.com"}

showUserDetails(u1)
showUserDetails(u2)

console.log('\n--------------------------------------------\n');

// 3 - Propriedades readonly
/* 
  As propriedades readonly podem ser alteradas apenas uma vez, na
  criação do novo dado. É uma forma de criar um valor constante em um objeto.
  Podemos adicionar as interfaces.

  Nós não alteramos o valor, iniciamos com um novo valor.
*/

interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: "Volkswagen",
  wheels: 4
}

// fusca.wheels = 5 - Não pode mudar o valor porque é somente leitura

console.log('\n--------------------------------------------\n');

// 4 - Index Signature
/*
  Utilizamos o index signature quando não sabemos o nome das chaves,
  mas já sabemos quais os tipos de um objeto ou array.

  Isso restringe a tipos que não devem ser utilizados. Uma barreira
  de segurança a mais na nossa variável.
*/

interface CoordObject {
  [index: string]: number
}

// let coords: CoordObject = {x: "teste"} Erro, pq o valor de x é string invés de number

let coords: CoordObject = {x: 10}
coords.y = 15
coords.z = 12

console.log(coords)

interface CoordObjectNumber {
  [index: number]: number
}

let coords2: CoordObjectNumber = { 10: 25 }
coords2[30] = 25

console.log(coords2)

console.log('\n--------------------------------------------\n');

// 5 - Herança de interfaces (Extending Types)
/*
  Usamos Extending Types como uma herança para criar tipos
  mais complexos por meio de uma interface, ou seja, uma
  interface pode herdar as propriedades e tipos já definidos
  de outra interface. Isso acontece por meio da instrução extends
*/

interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const marcos: Human = {
  name: "Marcos",
  age: 22
}

console.log(marcos)

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki dama"]
}

console.log(goku)
console.log(goku.superpowers[1])

console.log('\n--------------------------------------------\n');

// 6 - Intersection Types
/*
  Intersection Types são utilizados para criar tipos mais complexos a
  partir de duas interfaces, por exemplo:
  Podemos concactenar os tipos com &
*/

interface Character {
  name: string
}

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12
}

console.log(arnold)
console.log(arnold.caliber)

console.log('\n--------------------------------------------\n');

// 7 - Readonly array
/*
  O ReadonlyArray é um tipo para arrays, que deixa os itens como readonly
  Podemos aplicar um tipo para os itens do array, além desta propriedade especial.

  A modificação de itens pode ser feita através de método, mas não
  podemos aumentar o array, por exemplo.
*/

// Precisa espeficar o tipo do array, pq é um generic T
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

//myArray[3] = "Mamão" Não pode modificar pq é readonly e é uma modificação direta

console.log(myArray)

myArray.forEach((item) => {
  console.log(`Fruta: ${item}`)
})

// Com o map, conseguimos modificar o array, pq ele é um método
myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

console.log(myArray)

console.log('\n--------------------------------------------\n');

// 8 - Tuplas
/*
  Tupla é um tipo de array, porém definimos a quantidade e o tipo de elementos.
  Basicamente criamos um novo type e nele inserimos um array com os tipos necessários.

  Cada tipo conta também como um elemento.

  Isso deixa os arrays mais previsíveis.
*/

// Determinamos o tipo de cada um dos elementos
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1,2,3,4,5]
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6] Dar erro, pq tem 6 elementos

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Marcos", 22]
console.log(anotherUser[0])

anotherUser[0] = "Viana"
// anotherUser[1] = "teste" Não alterar, pq o tipo em [1] é number

console.log('\n--------------------------------------------\n');

// 9 - Tuplas com readonly
/*
  Podemos criar tuplas com a propriedades de readonly.
  É um tipo de dado super restrito, pois:
  Limita quantos itens teremos, qual o tipo de cada um e também
  não são modificáveis.
*/

function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10 - Não deixa alterar pq é propriedade readonly
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([1, 2])