// blackjack game
let player = {
  name : "PK",
  chips : 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips 
//getRandomCard() function
function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13) + 1
  if(randomNumber > 10){
    return 10
  } else if(randomNumber === 1){
    return 11
  } else {
    return randomNumber
  }
}
console.log(getRandomCard())

// create a new function called startGame() that calls renderGame()
function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}
function renderGame(){
  // renders the first card and second card on the page
  cardsEl.textContent = "Cards : "
  // loop for cards array
  for(let i =0 ; i<cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  // render out all the cards we have
  sumEl.textContent = "Sum : " + sum
  if(sum <= 20){
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Wohoo!! You've got the blackjack!"
    hasBlackJack = true
  } else {
     message = "You are out of game"
    isAlive = false
  }
  messageEl.textContent = message
}
function newCard(){
  // only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if(isAlive === true || hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame() 
  }
}
