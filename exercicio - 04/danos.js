const atacante = prompt ("Qual é o nome do personagem atacante? ")
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque? "))

const defensor = prompt ("Qual o nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui? "))
const poderDeDefesa = parseFloat(prompt("Qual é o Poder de Defesa? "))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert( atacante + " Causou " + danoCausado + " Pontos de Dano em " + defensor)
alert(
    atacante + "\n Poder de Ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\n Pontos de Vida: " + pontosDeVida +
    "\n Poder de Defesa: " + poderDeDefesa + " Possui Escudo: " + possuiEscudo
)