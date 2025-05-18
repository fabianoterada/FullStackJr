/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

prompt = require('prompt-sync')()

let contador = 10
let nro = Number(prompt("Insira um número: "))

for (contador = 10 ; contador > 0 ; contador-- ){
    console.log(nro)
}
