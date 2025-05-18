/*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/


console.log("Sequencia de Fibonacci \n")

let primeiro = 0
let segundo = 1
let i = 0

console.log(primeiro)
console.log(segundo)

for (i = 2; i < 10; i++) {
	let ultimo = primeiro + segundo
	console.log(ultimo)
	primeiro = segundo
	segundo = ultimo
}