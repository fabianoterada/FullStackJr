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

// EXERCÍCIO 3 -  Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair 
// todas as palavras únicas e exibi-las em um array.

/*
const frase = "olá olá mundo tudo bem bem e ai ai"


// Quebrando a frase em palavras:
const palavras = frase.split(" ")

console.log(palavras)


const unicas = []; // Array para guardar palavras únicas

for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i]
    if (!unica.includes(palavraAtual)){
        unica.push(palavraAtual)
    }
}  
console.log("Palavras únicas:", unica)
*/

// EXERCÍCIO 4 -  Fatorial Recursivo
//Implemente function fatorial(n) de forma recursiva; 
// trate n < 0 lançando um Error, e n === 0 retornando 1.
/*
function fatorial(n) {
  if (n < 0) {
     throw new Error("Fatorial não definido para n < 0")
  }
    
  if (n === 0) {
    return 1
  }

  return n * fatorial(n - 1);
}


console.log(fatorial(4)); //24
*/

// EXERCÍCIO 5 - Debounce Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, 
// retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.
/*
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Teste:
 const log = debounce(() => console.log('Executando Teste!'), 1000);
log();
log(); 
*/

// // EXERCÍCIO 6 -  Memoization 
// Implemente function memoize(fn) que armazene em cache chamadas 
// anteriores de fn (por argumentos), 
// retornando resultados instantâneos em repetidas invocações.
/*
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

// Testando o armazenamento:
const slowFn = (n) => n / 2;
const memoizedFn = memoize(slowFn);
console.log(memoizedFn(16)); // Calcula
console.log(memoizedFn(16)); // Do cache
*/

 //7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

/*
let produtos = [
    {nome: 'Uva', preco: 12},
    {nome: 'Pera', preco: 8},
    {nome: 'Banana', preco: 5},
    {nome: 'Laranja', preco: 6},
    {nome: 'Morango', preco: 20},
    {nome: 'Kiwi', preco: 17},
]

function novoArray(lista) {
    return lista
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome)
}

console.log(novoArray(produtos))
*/

//8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.
/*
let vendas = [
    {cliente: 'Fabiano', total: 55},
    {cliente: 'Otavio', total: 33},
    {cliente: 'Veronica', total: 27},
    {cliente: 'Maria', total: 115},
    {cliente: 'Fabiano', total: 86},
    {cliente: 'Maria', total: 74},
]

let somaTotal = vendas.reduce((acumulador, venda) => {
    acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.total
    return acumulador
}, {})

console.log(somaTotal)
*/
//9. Conversão Entre Formatos
// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

/*
function paresParaObjeto(pares){
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor
        return obj
    }, {})
}
    function objetoParaPares(obj) {
        return Object.entries(obj)
    }

let pares = [['nome', 'Fabiano'], ['idade', 42]]
let obj = {nome: 'Fabiano', idade: 42}

console.log(paresParaObjeto(pares))
console.log(objetoParaPares(obj))
*/
