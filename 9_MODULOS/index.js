"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const greet_1 = __importDefault(require("./greet")); // extensão .js, omitida
(0, greet_1.default)();
console.log('\n--------------------------------------------\n');
// Importando variáveis
/*
  Podemos exportar e importar variáveis também.

  A sintaxe é um pouco mais simples, vamos utilizar apenas o export.

  No arquivo de importação vamos importar os valores com destructuring
*/
// Importando variável com destructuring
const variables_1 = require("./variables");
console.log(variables_1.x);
console.log('\n--------------------------------------------\n');
// Multiplas importações
/*
  Podemos exportar múltiplas variáveis e funções.

  Isso pode ser realizado no mesmo arquivo.

  Para esta modalidade utilizamos export para todos os dados.

  E todos devem ser importados com destructuring.
*/
const multiples_1 = require("./multiples");
console.log(multiples_1.a);
console.log(multiples_1.b);
(0, multiples_1.myFunction)();
console.log('\n--------------------------------------------\n');
// Alias de Importação
/*
  Podemos criar um alias para importações.
  Ou seja, muda o nome do que foi importado.

  Podendo tornar este novo nome, uma forma mais
  simples de chamar o recurso.
*/
const changename_1 = require("./changename");
console.log(changename_1.someName);
console.log('\n--------------------------------------------\n');
// Importando diversos itens
/*
  Podemos importar tudo que está em um arquivo com apenas
  um símbolo que é o " * "

  Os dados virão em um objeto.
*/
// Precisa criar um alias para que ele coloque no
// valor da variável um objeto com todos os itens importados.
const myNumbers = __importStar(require("./numbers"));
console.log(myNumbers);
const nX = myNumbers.n1;
console.log(nX);
myNumbers.showNumber();
console.log('\n--------------------------------------------\n');
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const marcos = new User("Marcos", 22);
console.log(marcos);
console.log('\n--------------------------------------------\n');
