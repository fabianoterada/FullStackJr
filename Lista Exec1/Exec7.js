/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

prompt = require('prompt-sync')()

let totalQtdeMacas = 0

    console.log("SISTEMA HORTFRUT! \n")
    let qtdeMacas = Number(prompt("Informe a quatidade de maçãs que deseja comprar: "));
    
     if ( qtdeMacas < 12){
        totalQtdeMacas = (qtdeMacas * 0.30)
        }else{
        totalQtdeMacas = (qtdeMacas * 0.25)
        }
    
    console.log ("Foram compradas ",qtdeMacas," Maçãs e o valor total é de R$ ",totalQtdeMacas)