 let opcao = "5"

 do {
    opcao = prompt(
        "seja Bem-Vindo (a) \n"+
        "\n 1. opção Um" +
        "\n 2. opção Dois" +
        "\n 3. opção Três" +
        "\n 4. opção Quatro" +
        "\n 5. Encerrar"
    )

    switch (opcao){
        case "1":
            alert (" Você Escolheu a Opção 1")
            break
        case "2":
            alert (" Você Escolheu a Opção 2")
            break
        case "3":
            alert (" Você Escolheu a Opção 3")
            break
        case "4":
            alert (" Você Escolheu a Opção 4")
            break
        case "5":
            alert (" Você Escolheu Encerrar ")
            alert ("Encerrando")
            break
        default:
            alert("Opção Invalida")
    }

 }while (opcao !== "5" )