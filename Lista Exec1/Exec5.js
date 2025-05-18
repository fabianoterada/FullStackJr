//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

prompt = require('prompt-sync')()

let peso = 0
let altura = 0
let imc = 0.00

/* Tabela IMC
Abaixo do peso < 18,5
Peso saudável 18,5 a 24,9
Sobrepeso 25,0 a 30,0
Obeso 30,1 a 39,9
Obeso mórbido > 40
*/

    console.log("                   ")
    console.log("****** Calculadora de IMC *******")
    console.log("                   ")
    peso= prompt("Informe seu peso em KG: ")
    console.log("                   ")
    altura= prompt("Informe sua altura em cm: ")
    imc = (peso / (altura*altura))*10000
    console.log("                   ")
    console.log("Seu IMC é : ", imc)
    if (imc < 18.5){
    console.log(" Você esta abaixo do peso!")
    }else if (imc >= 18.5 && imc <= 24.9){
    console.log(" Você esta com o peso saudável!")
    }else if (imc >= 25 && imc <= 30){
    console.log(" Você esta com sobrepeso!")
    }else if (imc >= 30.1 && imc <= 39.9){
    console.log(" Você esta obeso!")
    }else if (imc >= 40){
    console.log(" Você esta obeso mórbido!")
    }
