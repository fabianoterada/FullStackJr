/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou equilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo equilátero: possui todos os lados iguais (A=B e B=C)
*/

prompt = require('prompt-sync')()

    console.log("Por favor informe 3 valores para descobrir se formam um triangulo e qual seu tipo! \n")
    let A = Number(prompt("Informe o valor de A: "));
    let B = Number(prompt("Informe o valor de B: "));
    let C = Number(prompt("Informe o valor de c: "));
    
     if ( A < B + C && B < A + C && C < A + B){
        if (A === B && B === C){
            console.log("É um Triângulo equilátero!");
        }else if (A === B || A === C || B === C){
            console.log("É um Triângulo isósceles!");
        }else{
            console.log("É um Triângulo escaleno!");
        }
    }else {
        console.log ("Os valores digitados não formam um triangulo!")
    }
