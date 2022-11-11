
let player = {
    name: 'Mae',
    chips: 900
}

let cards = []
let sum = 0
let hadBlackjack = false
let isAlive = false
let startedGame = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function renderGame () {
    if (sum < 21) {
        message = "Would you like to draw a new card?"
    } else if (sum === 21) {
        message = "Congratulations, you've got blackjack!"
        hadBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard () {
    if (isAlive === true && hadBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}

function startGame () {
    if (startedGame === false) {
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        isAlive = true
        startedGame = true
        renderGame()
    }
}

function getRandomCard () {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

