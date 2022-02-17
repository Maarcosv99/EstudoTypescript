"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - numbers
let x = 10;
console.log(typeof x);
let y = 15.58919;
console.log(typeof y);
// Erro: y.toUpperCase()
// DIVISOR
console.log('\n--------------------------------------------\n');
// 2 - String
const firstName = "Marcos";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Viana";
fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log(typeof fullName);
// DIVISOR
console.log('\n--------------------------------------------\n');
// 3 - Boolean
let a = false;
console.log(false);
console.log(typeof a);
a = true;
console.group(!a);
// DIVISOR
console.log('\n--------------------------------------------\n');
// 4 - Inference vs Annotation
/*
  Inference = Quando você não informa o tipo, mas o Typescript identifica.
  Annotation = Quando você informa o tipo para o Typescript;

  Annotation é melhor por deixar as coisas explicí
*/
// Inference
let b = true;
console.log(typeof b); // Boolean
// Annotation
let c = true;
console.log(typeof c); // Boolean
