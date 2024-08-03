<<<<<<< HEAD
const turista = prompt ("E ai turista! Qual o seu Nome? ")
let cidades = " "
let contagem = 0

let continuar = prompt ("Voce visitou alguma cidade (Sim/Não)")

while (continuar === "Sim" ){
    let cidade = prompt ("Qual é o nome da cidade Visitada? ")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt ("Voce visitou alguma outra cidade? (Sim/ Não)")
}

alert (
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
=======
const turista = prompt ("E ai turista! Qual o seu Nome? ")
let cidades = " "
let contagem = 0

let continuar = prompt ("Voce visitou alguma cidade (Sim/Não)")

while (continuar === "Sim" ){
    let cidade = prompt ("Qual é o nome da cidade Visitada? ")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt ("Voce visitou alguma outra cidade? (Sim/ Não)")
}

alert (
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
>>>>>>> b8870bcb907e486142cd9bcf2de0f64187e65047
)