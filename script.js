// document.querySelector(".name").textContent = prompt("Please Enter Your Name");

// Assigning buttons as constants
const btnNew = document.querySelector(".new");
const btnHit = document.querySelector(".hit");
const btnHold = document.querySelector(".hold");

let message = document.querySelector(".message");
let cards = []; // Keeps track of cards drawn in current game
let currentScore = 0;

// Creates new game
newGame();

// Starts a new game
btnNew.addEventListener("click", newGame);

// Draws another card
btnHit.addEventListener("click", function () {
  let newCard;

  // Keeps generating random card if card has already been drawn
  do {
    newCard = randomCard();
  } while (!checkNewCard(newCard));
  cards.push(newCard); // Adding new card to array
  currentScore += addScore(newCard); // Adding score
  refreshCurrentScore(currentScore); // Refreshing current score display

  // Displaying new card
  let cardIndex = cards.length;
  document.querySelector(`.card${cardIndex}`).src = `cards/${newCard}.png`;
  document.querySelector(`.card${cardIndex}`).classList.remove("hidden");

  // If score exceeds 21, if player has an ace which is 11 by default, will be changed to 1
  let ace = false;
  if (currentScore > 21) {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].charAt(0) === "A") {
        ace = true;
        cards[i] = "1";
        currentScore -= 10;
        refreshCurrentScore(currentScore);
        break;
      }
    }

    // If player has no aces, bust
    if (!ace) {
      setPlayerScore(currentScore);
      getDealerScore();
      message.textContent = "Bust! You Lose";
    }
  }
});

// Holds (Sets player's score to the current score)
btnHold.addEventListener("click", function () {
  setPlayerScore(currentScore);
  dealerScore = getDealerScore();

  // If dealer score is over 21 (bust) or player's score is higher, player wins. Otherwise, player loses
  if (dealerScore > 21 || currentScore > dealerScore) {
    message.textContent = "You Win!";
  } else {
    message.textContent = "You Lose!";
  }
});

// Starts a new game
function newGame() {
  cards = []; // Empties the cards array
  currentScore = 0; // Resets current score
  message.textContent = ""; // Clearing win/loss message

  // Setting score displays to 0
  setPlayerScore(0);
  document.querySelector("#dealerScore").textContent = 0;

  // Hiding all cards except first 2 (max is 7)
  for (let i = 3; i <= 7; i++) {
    document.querySelector(`.card${i}`).classList.add("hidden");
  }

  // Generating first random card
  let card1 = randomCard();
  cards.push(card1);
  currentScore += addScore(card1);

  // Generating second random card
  let card2;
  do {
    card2 = randomCard();
  } while (!checkNewCard(card2)); // Ensuring new card has not been drawn yet
  cards.push(card2);
  currentScore += addScore(card2);
  refreshCurrentScore(currentScore);

  // Displaying cards
  document.querySelector(".card1").src = `cards/${card1}.png`;
  document.querySelector(".card2").src = `cards/${card2}.png`;
}

// Adding score of current card
function addScore(card) {
  let score;

  if (card.charAt(0) == "A") {
    score = 11;
  } else if (
    card.charAt(0) == "J" ||
    card.charAt(0) == "Q" ||
    card.charAt(0) == "K" ||
    card.charAt(0) == 1
  ) {
    score = 10;
  } else {
    score = Number(card.charAt(0));
  }
  return score;
}

// Generates a random card
function randomCard() {
  let randSuit = Math.trunc(Math.random() * 4);
  let suit;
  switch (randSuit) {
    case 0:
      suit = "H";
      break;
    case 1:
      suit = "D";
      break;
    case 2:
      suit = "C";
      break;
    case 3:
      suit = "S";
  }

  let randNum = Math.trunc(Math.random() * 13) + 1;
  let num;

  if (randNum === 1) {
    num = "A";
  } else if (randNum < 11) {
    num = randNum;
  } else if (randNum === 11) {
    num = "J";
  } else if (randNum === 12) {
    num = "Q";
  } else if (randNum === 13) {
    num = "K";
  }
  console.log(num + suit);
  return num + suit;
}

// Will return true if new card, and false if card has already been drawn
function checkNewCard(card) {
  let newCard = true;
  for (let i = 0; i < cards.length; i++) {
    if (card === cards[i]) {
      newCard = false;
      break;
    }
  }
  return newCard;
}

function refreshCurrentScore(currentScore) {
  document.querySelector("#currentScore").textContent = currentScore;
}

function setPlayerScore(score) {
  document.querySelector("#playerScore").textContent = score;
}

function getDealerScore() {
  let dealerScore = Math.trunc(Math.random() * 10) + 17; // 17 to 26, min dealer score is 17, if 16 max they can draw is 10 so max dealer score is 26
  document.querySelector("#dealerScore").textContent = dealerScore;
  return dealerScore;
}
