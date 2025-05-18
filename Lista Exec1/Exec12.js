/*
12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/

prompt = require('prompt-sync')()

let contador = 0
let numeroTabuada = Number(prompt('Qual o número que você quer saber a tabuadada?' ))

for (contador = 1 ; contador <= 10 ; contador++ ){
   console.log(`${numeroTabuada} X ${contador} = ${numeroTabuada * contador}`)
}