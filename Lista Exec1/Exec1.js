//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let numero = prompt("Insira um número: ")
 if (isNaN(numero)) {
    console.log("O valor digitado não é um número.");
  }else if (numero % 2 === 0) {
    console.log('Esse número é par')
} else {
    console.log('Esse número é ímpar')
}