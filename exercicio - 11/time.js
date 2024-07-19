<<<<<<< HEAD
function addPlayer () {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm("Escalar " + name + " como " + position + " ?")

    if (confirmation) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'Player - '+ number
        playerItem.innerText = position + " : " + name + " (" + number + ")"
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}
function removePlayer () {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('Player - '+ number)

    const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + ' ?')

    if (confirmation){
        document.getElementById('teamList').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
}
=======
function addPlayer () {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm("Escalar " + name + " como " + position + " ?")

    if (confirmation) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'Player - '+ number
        playerItem.innerText = position + " : " + name + " (" + number + ")"
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}
function removePlayer () {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('Player - '+ number)

    const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + ' ?')

    if (confirmation){
        document.getElementById('teamList').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
}
>>>>>>> b8870bcb907e486142cd9bcf2de0f64187e65047
