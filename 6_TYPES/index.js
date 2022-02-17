"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sem interface, precisariamos sempre informar os mesmos parâmetros para
// todas as funções que recebe aquele objeto.
//function showProductDetails(name: string, price: number, isAvailable: boolean) {}
// Simplificamos fazendo assim:
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível!");
    }
}
const camiseta = { name: "Tshirt", price: 19.90, isAvailable: true };
showProductDetails(camiseta);
showProductDetails({ name: "Tênis", price: 147.50, isAvailable: false });
console.log('\n--------------------------------------------\n');
function showUserDetails(user) {
    console.log(`O email do usuário é: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "marcosvianacdc@gmail.com", role: "Admin" };
const u2 = { email: "teste@mail.com" };
showUserDetails(u1);
showUserDetails(u2);
console.log('\n--------------------------------------------\n');
const fusca = {
    brand: "Volkswagen",
    wheels: 4
};
// fusca.wheels = 5 - Não pode mudar o valor porque é somente leitura
console.log('\n--------------------------------------------\n');
// let coords: CoordObject = {x: "teste"} Erro, pq o valor de x é string invés de number
let coords = { x: 10 };
coords.y = 15;
coords.z = 12;
console.log(coords);
let coords2 = { 10: 25 };
coords2[30] = 25;
console.log(coords2);
console.log('\n--------------------------------------------\n');
const marcos = {
    name: "Marcos",
    age: 22
};
console.log(marcos);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki dama"]
};
console.log(goku);
console.log(goku.superpowers[1]);
console.log('\n--------------------------------------------\n');
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
console.log('\n--------------------------------------------\n');
// 7 - Readonly array
/*
  O ReadonlyArray é um tipo para arrays, que deixa os itens como readonly
  Podemos aplicar um tipo para os itens do array, além desta propriedade especial.

  A modificação de itens pode ser feita através de método, mas não
  podemos aumentar o array, por exemplo.
*/
// Precisa espeficar o tipo do array, pq é um generic T
let myArray = ["Maçã", "Laranja", "Banana"];
//myArray[3] = "Mamão" Não pode modificar pq é readonly e é uma modificação direta
console.log(myArray);
myArray.forEach((item) => {
    console.log(`Fruta: ${item}`);
});
// Com o map, conseguimos modificar o array, pq ele é um método
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
console.log('\n--------------------------------------------\n');
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ["Marcos", 22];
console.log(anotherUser[0]);
anotherUser[0] = "Viana";
// anotherUser[1] = "teste" Não alterar, pq o tipo em [1] é number
console.log('\n--------------------------------------------\n');
// 9 - Tuplas com readonly
/*
  Podemos criar tuplas com a propriedades de readonly.
  É um tipo de dado super restrito, pois:
  Limita quantos itens teremos, qual o tipo de cada um e também
  não são modificáveis.
*/
function showNumbers(numbers) {
    // numbers[0] = 10 - Não deixa alterar pq é propriedade readonly
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
