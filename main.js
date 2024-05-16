let firstCard;
let secondCard;
let sum;
let cards = document.getElementById("cards");
let sumEl = document.getElementById("sum")
let cardsArray = [];
let isAlive = false;
let messageEl = document.getElementById("message")

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10 && randomCard <= 13) {
        return 10;
    }
    else if (randomCard === 1) {
        return 11;
    }
    else {
        return randomCard;
    }
}

function startGame() {
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    renderGame();
}

function renderGame()
{
    isAlive = true;
    

    if (sum === 21) {
        messageEl.textContent = "You win! Yippy";
    }
    else if(sum > 21) {
        messageEl.textContent = "You are broke. Stupid gambler!";
    }
    else {
        messageEl.textContent = "Do you want to draw a new card?"
    }
}





function newCard() {
    let card = getRandomCard();
    // cards.push(card);
    cards.textContent += " " + card
    sum += card;
    sumEl.textContent = "Sum: " + sum;
    renderGame();
}