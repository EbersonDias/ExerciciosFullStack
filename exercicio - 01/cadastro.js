
primeiroNome = window.prompt("Insira o seu Nome: ")
sobrenome = window.prompt("Insira o seu Sobrenome: ")
campoDeEstudo = window.prompt("Insira o seu Campo de Estudo: ")
anoDeNascimento = window.prompt("Insira o seu Ano de Nascimento: ")

alert(
    "Recruta cadastrado com Sucesso!\n" +
    "\nNome Completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de Estudo: " + campoDeEstudo +
    "\nIdade: " + (2023 - anoDeNascimento)
)