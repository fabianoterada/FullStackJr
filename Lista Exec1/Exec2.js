//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

//Faixa 0 - 11 anos --> Criança
//Faixa 12 - 17 anos --> Adolescente
//Faixa 18 - 59 anos --> Adulto
//Faixa 60 - 110 anos --> Idoso

const prompt = require('prompt-sync')()

let faixa = 0
let fxEtaria 
let idade = Number(prompt("Insira sua idade: "))

if (idade <0) {
    faixa = 0
}else if (idade >= 0 && idade < 12 ) {
    faixa = 1
}else if (idade >= 12 && idade < 18 ) {
    faixa = 2
}else if (idade >= 18 && idade < 60 ) {
    faixa = 3
}
else if (idade >= 60 && idade < 111 ) {
    faixa = 4
}

switch(faixa){
    case 0:
        fxEtaria = ("Idade digitada inválida") 
        break
    case 1:
        fxEtaria = ("Voce esta na faixa etária de criança") 
        break
    case 2:
        fxEtaria = ("Voce esta na faixa etária de adolescente") 
        break
    case 3:
        fxEtaria = ("Voce esta na faixa etária de adulto") 
        break
    case 4:
        fxEtaria = ("Voce esta na faixa etária de idoso") 
        break
}

console.log(fxEtaria)