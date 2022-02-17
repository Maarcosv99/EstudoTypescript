export {}

// 2 - Sobre a criação de tipos
/*
  Há a possibilidade de gerar novos tipos em Typescript, já
  vimos isso com Generics (vamos nos aprofundar nesse recurso)

  Porém existe outros operadores que visam facilitar nossa vida
  neste assunto.

  A ideia deste recurso é deixar a manutenção do projeto mais simples.
  Ou seja, gastar mais tempo na estruturação dos tipos e menos
  na busca de possíveis bugs depois.

  Quebra a cabeça mais vezes na estrutura, mas depois você
  quebra pouco a cabeça no código, em caso de bugs.
*/

console.log('\n--------------------------------------------\n');

// 3 - Revisão de Generics
/*
  Utilizamos Generics quando uma função pode aceitar mais de um tipo.
  É uma prática mais interessante do que o any, que teria um efeito
  semelhante, porém com Generics.
*/

function showData<T>(arg: T): string {
  return `O dado é ${arg}`
}

console.log(showData("Eae"))
console.log(showData(5))
console.log(showData(true))
console.log(showData(["teste"]))

console.log('\n--------------------------------------------\n');

// 4 - Reduzindo tipos aceitos em Genercis
/*
  As constraints nos ajudam a limitar os tipos aceitos.
  Como em Generic podemos ter tipos livres, elas vão filtras
  os tipos aceitos. Adicionando organização quando queremos
  aproveitar a liberdade dos generics.
*/

function showProductName<T extends { name: string }>(obj: T): string {
  return `O nome do produto é: ${obj.name}`
}

const myObj = { name: "Door", color: "white" }
const otherProduct = { name: "Car", wheels: 4, enigne: 1.0 }

// Não vai dar erro, pq os objetos acima a propriedade name
// e é isso que ele quer, não importa se tem mais propriedades
// do que a que definimos, o que importa é que tem a propriedade
// name e ela é uma string
console.log(showProductName(myObj))
console.log(showProductName(otherProduct))

console.log('\n--------------------------------------------\n');

// 5 - Interfaces com Generics
/*
  Com interfaces podemos criar tipos complexos para objetos.
  Adicionando Generics podemos deixá-los mais brandos.
  Aceitando tipos diferentes em ocasiões diferentes.
*/

interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "white" }
const myPen: Pen = { name: "Caneta BIC", wheels: false, engine: false, color: "blue" }

console.log(myCar)
console.log(myPen)

console.log('\n--------------------------------------------\n');

// 6 - Type Parameters
/*
  Type parameters é um recurso de Generics.
  Utilizado para dizer que algum parâmetro de uma função, por exemplo,
  é a chave de um objeto, que também é parâmetro.

  Desta maneira conseguimos criar uma ligação entre o tipo
  genérico e sua chave.

  Utilizar a chave (propriedade) de um objeto determinando isso no generic.
  Ligando um argumento ao outro, e tipando informando que o 2º argumento é
  uma chave do 1º argumento.
*/

// O valor do 2º parâmetro (K) precisa ser alguma propriedade que tem
// no objeto T. Somente o que está dentro do obj, podemos utilizar.
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste')) Teste não é uma propriedade de server

console.log('\n--------------------------------------------\n');

// 7 - Keyof type operator
/*  
  Com o keyof type operator podemos criar um novo tipo.
  Ele aceita dados do tipo objeto, como object literals e arrays.
  E pode criar o tipo baseado nas chaves do objeto passado como parâmetro.
*/

type Character = { name: string, age: number, hasDriveLicense: boolean }

type C = keyof Character

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`
}

const marcos: Character = {
  name: "Marcos",
  age: 22,
  hasDriveLicense: true
}

console.log(showCharName(marcos, "age"))
console.log(showCharName(marcos, "name"))

console.log('\n--------------------------------------------\n');

// 8 - Typeof type Operator
/*
  Com o typeof Type Operator podemos criar um novo tipo.
  Este tipo será baseado no tipo de algum dado, ou seja,
  é interessante para quando queremos criar uma variável
  com o mesmo tipo da outra.
*/

const userName: string = "Marcos"
const userName2: typeof userName = "Viana"

type x = typeof userName

const username3: x = "Vinícius"

console.log('\n--------------------------------------------\n');

// 9 - Indexed Access Types
/*
  A abordagem Indexed Access Types pode criar um tipo baseado em uma chave de objeto.
  Ou seja, conseguimos reaproveitar o tipo da chave para outros locais, como funções.

  Temos a liberdade de utilizar a mesma função e tipo em outros objetos
  que possui propriedades com o mesmo nome.
*/

type Truck = { km: number, kg: number, description: string }

// Indexed Access Type
// O tipo km é igual ao tipo de Truck["km"] no caso, number
type Km = Truck["km"]

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para pouca carga"
}

function showKm(km: Km) {
  console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)

const newCar = {
  km: 5000,
  kg: 10000,
}

showKm(newCar.km)

console.log('\n--------------------------------------------\n');

// 10 - Conditional Types
/*
  O tipo por condição permite criar um novo tipo com base em um if/else
  Mas não são aceitas expressões tão amplas. Utilizamos a sintaxe de if ternário.
*/

interface A {}

interface B extends A {}

type myType = B extends A ? number : string

const someVar:myType = 5
// const someVar2:myType = "Teste" - Da erro pq B extende de A, então o tipo é number

interface Teste {
  showName(): string
}

// myTypeB vira string, pq a interface Teste possui a propriedade {showName(): string}
type myTypeB = Teste extends {showName(): string} ? string : boolean

console.log('\n--------------------------------------------\n');

// 11 - Template Literals Type
/*
  Podemos criar tipos com Template literals.
  É uma fomra de customizar tipos de maneiras infinitas.
  pois o text oque formamos pode depender de variáveis.
*/

type testA = "text"

type CustomType = `some ${testA}`

// Precisamos colocar o valor exato: "some text"
const testing: CustomType = "some text"
// const testing2: CustomType = "some text 222" -> Erro pq não é o valor exato

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`

const testing3: a3 = "Union"
const testin4g: a3 = "Testando"
// const testin5g: a3 = "Nada" -> Erro pq só pode ser "Testando" ou "Union"