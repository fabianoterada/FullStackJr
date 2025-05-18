/*
13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

prompt = require('prompt-sync')()

let nro 
let somaNro = 0
let soma = 0

do {
    nro = Number(prompt("Digite um número: "))
    if (nro != 0) {
      somaNro = somaNro + nro
      soma = soma + 1
    }else {
      console.log ("A Soma Aritmetica é: ", (somaNro/soma))  
    }
}while (nro != 0)