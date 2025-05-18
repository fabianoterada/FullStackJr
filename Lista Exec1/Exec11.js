/*
11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/

prompt = require('prompt-sync')()

let contador = 5
let total = 0
let nro = 0

for (contador = 5 ; contador > 0 ; contador-- ){
    nro = Number(prompt("Insira um número: "))
    total = total + nro
}
console.log("O total digitado foi de: ",total)
