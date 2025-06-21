//EXERCÍCIO 1 - Validação de Datas 

// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores 
// formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário. 

/*function ehDataValida(dia, mes, ano) {
    if (mes < 1 || mes > 12 || dia < 1) return false;

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
        diasPorMes[1] = 29
    }

    return dia <= diasPorMes[mes - 1];
}

// validação das datas

console.log(ehDataValida(32, 5, 2025)); // false (maio tem 31 dias)
console.log(ehDataValida(29, 2, 2016)); // true (ano bissexto)
console.log(ehDataValida(31, 7, 2021)); // true (julho tem 31 dias)
console.log(ehDataValida(29, 2, 2023)); // false (ano não bissexto)
console.log(ehDataValida(31, 6, 2025)); // false (junho tem 30 dias)
*/

// EXERCÍCIO 2 - Jogo de Adivinhação 
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao 
// usuário, para adivinhar. Use while para repetir até acertar, contando 
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. 

/*
function jogoAdivinhacao() {
    
const nroSecreto = Math.floor(Math.random() * 100) + 1
let tentativa = 0

const prompt = require('prompt-sync')()

// iniciando as tentativas
let sugestao = Number(prompt("Digite um número de 1 a 100: "))

    while(sugestao != nroSecreto){
        if(sugestao < nroSecreto){
            console.log("Mais Alto")
        } else{
            console.log("Mais Baixo")
        } 
    tentativa += 1
    sugestao = Number(prompt("Digite um número: "))   
    }

console.log('Você acertou!!! O número escolhido foi o  ', sugestao , 'você precisou de ', tentativa, ' tentativas para descobrir o número secreto.')
}

jogoAdivinhacao();
*/