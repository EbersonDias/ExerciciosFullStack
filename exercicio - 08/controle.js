let saldo = prompt ("informe a quantidade de dinheiro inicial: ")
saldo = parseFloat (saldo)
let opcao = " "

do{
    opcao = prompt(
        "saldo disponivel: R$ " + saldo +
        "\n1. Adicionar Dinheiro" +
        "\n2. Remover Dinheiro" +
        "\n3. Sair"

    )
    switch(opcao){
        case "1":
            saldo += parseFloat(prompt("Informe o Valor a ser adicionado: "))
            break
        case "2":
            saldo -= prompt("Informe o valor a ser removido: ")
            break
        case "3":
            alert("saindo...")
            break
        default:
            alert("Entrada Invalida")
    }
}while (opcao !== "3")

document.write (saldo)