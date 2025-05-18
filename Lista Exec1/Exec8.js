/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

prompt = require('prompt-sync')()
    console.log("Ordem Crescente! \n")
    let valor1 = Number(prompt("Informe o valor 1: "));
    let valor2 = Number(prompt("Informe o valor 2: "));
    

    if ( valor1 > valor2){
        console.log(valor2)
        console.log(valor1)
        }else{
        console.log(valor1)
        console.log(valor2)
        }