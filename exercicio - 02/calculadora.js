const entrada1 = prompt("Digite um Numero: ")
const entrada2 = prompt("Digite um Segundo Numero: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const adicao = x + y
const subtracao = x - y
const divisao = x / y
const multiplicacao = x * y

alert(
    "Resultado: \n" +
    "\n Soma: " + adicao +
    "\n Subtração: " + subtracao +
    "\n Divisão: " + divisao +
    "\n Multiplicação: " + multiplicacao
)