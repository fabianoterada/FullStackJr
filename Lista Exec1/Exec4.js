//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
// Utilize switch-case para implementar a lógica de cada opção selecionada.
prompt = require('prompt-sync')()

let opcao

do{
    console.log("                   ")
    console.log("****** SISTEMA INTERATIVO *******")
    console.log("Escolha uma opção:")
    console.log("                   ")
    console.log("1 - Fazer uma soma!")
    console.log("2 - Para converter graus Celsius em Fahrenheit!")
    console.log("3 - Verificar se o valor é Par ou Ímpar!")
    console.log("0 -  Sair do Sistema")
    
console.log("                   ")
    opcao= prompt("Informe uma opção:")
    opcao= parseInt(opcao)
switch(opcao){
    case 1:
        let valor1 = Number(prompt("Insira o primeiro valor: "))
        let valor2 = Number(prompt("Insira o segundo valor: "))
        let resultado = valor1 + valor2
        console.log ("A soma é : ", resultado)
        break
    case 2:
        let temperatura = Number(prompt("Insira a temperatura em Graus Celsius: "))
        let faren = ((temperatura* 1.8)+32)
        console.log("A temperatura em Fahrenheit é :",faren)
        break
    case 3:
        let number = Number(prompt("Insira um número : "))
        number % 2 === 0 ? console.log ("O número digitado é PAR") : console.log ("O número digitado é Impar")
        break
    case 0:
        console.log("                   ")
        console.log("Finalizando o Sistema ")
        console.log("                   ")
        console.log("****** SISTEMA FINALIZADO *******")
        break
    default:
        console.log("Opção Inválida")
        break
}
    
}while(opcao!==0)
