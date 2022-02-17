export {}

// Sobre módulos
/*
  Os módulos são a forma que temos para importar código em arquivos.
  Podemos exportar código com o " export default "
  E importar com " import "

  Criaremos os arquivos com .ts , mas importaremos como .js

  Isso nos dá mais flexibilidade, podendo separar as responsabilidades
  em arquivos.

  Utilizaremos o Node.js para executar os arquivos com módulos.
*/

console.log('\n--------------------------------------------\n');

// Importação de arquivos
/*
  Quando a extensão é .js podemos omitir a extensão do arquivo,
  deixando apenas o nome dele.
*/

import importGreet from "./greet"; // extensão .js, omitida

importGreet()

console.log('\n--------------------------------------------\n');

// Importando variáveis
/*
  Podemos exportar e importar variáveis também.

  A sintaxe é um pouco mais simples, vamos utilizar apenas o export.

  No arquivo de importação vamos importar os valores com destructuring
*/

// Importando variável com destructuring
import { x } from "./variables"

console.log(x)

console.log('\n--------------------------------------------\n');

// Multiplas importações
/*
  Podemos exportar múltiplas variáveis e funções.

  Isso pode ser realizado no mesmo arquivo.

  Para esta modalidade utilizamos export para todos os dados.

  E todos devem ser importados com destructuring.
*/

import { a, b, myFunction } from "./multiples"

console.log(a)
console.log(b)
myFunction()

console.log('\n--------------------------------------------\n');

// Alias de Importação
/*
  Podemos criar um alias para importações.
  Ou seja, muda o nome do que foi importado.

  Podendo tornar este novo nome, uma forma mais
  simples de chamar o recurso.
*/

import { someName as name } from "./changename"

console.log(name)

console.log('\n--------------------------------------------\n');

// Importando diversos itens
/*
  Podemos importar tudo que está em um arquivo com apenas
  um símbolo que é o " * "

  Os dados virão em um objeto.
*/

// Precisa criar um alias para que ele coloque no
// valor da variável um objeto com todos os itens importados.
import * as myNumbers from "./numbers"

console.log(myNumbers)

const nX = myNumbers.n1
console.log(nX)

myNumbers.showNumber()

console.log('\n--------------------------------------------\n');

// Importando tipos
/*
  Importar tipos ou interfaces também é possível.

  Vamos exportar como se fossem variáveis.
  E no arquivo que os recebe, utilizamos destructuring.

  Depois podemos implementar no projeto.
*/

import { Human } from "./mytype";

class User implements Human {
  name: string;
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const marcos = new User("Marcos", 22)
console.log(marcos)

console.log('\n--------------------------------------------\n');