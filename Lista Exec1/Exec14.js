/*
14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/

prompt = require('prompt-sync')()

let fatorial = Number(prompt("Insira o valor: "))
let resultado = 1
let i = 0

for (i = 1; i <= fatorial; i++) {
    resultado = resultado * i;
}
console.log(resultado);