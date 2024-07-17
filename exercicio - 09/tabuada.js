const numero = prompt ("eu sou o robo da tabuada!\n" +
"Informe o numero que voce deseja calcular a tabuada: ")

let resultado = " "

for(  let fator= 1; fator<=10; fator++){
    resultado += " -> " + numero + " * " + fator + " = " +(numero * fator) + "\n"
}
alert("Resultado da tabuada de "+ numero + ":\n" + resultado)