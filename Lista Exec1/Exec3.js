//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

//Reprovado - Nota menor que 5
//Recuperação - Nota entre 5 e 7
//Aprovado - Nota maior que 7

const prompt = require('prompt-sync')()

let nota = Number(prompt("Insira sua nota: "))
if (nota <0 || nota >10){
    console.log ("Insira uma nota válida entre 0 e 10")
}else if (nota < 5) {
    console.log ("Você esta Reprovado!")
}else if (nota >= 5 && nota <=7 ) {
    console.log ("Você esta de Recuperação!")
}else if (nota > 7 && nota < 10 ) {
    console.log ("Você esta APROVADO!")
}
