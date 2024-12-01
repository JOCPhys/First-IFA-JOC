// ### can i add the fancy comment lines so that when you hover over fucntion names, it works?

const cards = document.querySelectorAll('.hazard-card');


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchCount = 0;
let moveCount = 0;
let gameStarted = false;
let timerInterval;

function flipCard() {

  // if lockBoard is true, nothing else can be executed
// console.log("1")
  if (lockBoard) return;

  // if this is the same card, exit the function
// console.log("2")
  if (this === firstCard) return;

// console.log("3")
  this.classList.add('flip');

  if (!gameStarted) {
    gameStarted = true;
    startTimer();
  }

// console.log("4")
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }
    secondCard = this;
    checkForMatch();
  }
  // check for match
function checkForMatch() {
  if (!firstCard || !secondCard) {
    console.error("One or both cards are undefined");
    return;
  } else {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    isMatch ? disableCards() : unflipCards();
    moveCounter()
  }
}
function moveCounter(){
  moveCount++;
  document.getElementById('number-of-moves').textContent = moveCount;
}

function disableCards() {
// console.log("8")
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matchCounter();

  resetBoard();
}

function matchCounter(){
  matchCount++;
  document.getElementById('correct-matches').textContent = matchCount;
  if (matchCount === 8){
    alert("Congratulations! You have matched all the cards!");
    clearInterval(timerInterval);
  }
}

function unflipCards() {
   // locks board until the cards are flipped back
    lockBoard = true;
    setTimeout(() => {
      if (firstCard && secondCard) {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      }
      resetBoard();
    }, 1200);
  }

// reset the board after each round
function resetBoard() {
// console.log("10")
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function startTimer() {
  // Clear any existing interval first
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  let seconds = 0;
  let minutes = 0;
  const timerElement = document.getElementById("timer");
  
  function updateTimer() {
    seconds++;
    
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    
    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
  }
  
  timerInterval = setInterval(updateTimer, 1000);
}


// Shuffle function
function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
}

// Immediately invoked function to shuffle the cards on page load
(function shuffleOnLoad() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
})();

function resetGame() {
  // Stop the timer
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;  // Reset the interval variable
  }
  
  // Reset all game variables
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
  matchCount = 0;
  moveCount = 0;
  gameStarted = false;

  // Reset UI elements
  document.getElementById('correct-matches').textContent = '0';
  document.getElementById('number-of-moves').textContent = '0';
  document.getElementById('timer').textContent = '00:00';

  // Flip all cards back
  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
  });

  // Delay the shuffle to ensure cards have unflipped
  setTimeout(() => {
    shuffle();
  }, 500); // Adjust the delay time as needed
}


// This adds an event listener to each card, and calls the flipCard function when clicked
cards.forEach(card => card.addEventListener('click', flipCard));

document.getElementById('new-game-button').addEventListener('click', resetGame);

document.addEventListener('DOMContentLoaded', () => {
    const difficultyButton = document.getElementById('difficulty-button');
    const sections = {
        easy: document.getElementById('hazard-game-easy'),
        medium: document.getElementById('hazard-game-medium'),
        hard: document.getElementById('hazard-game-hard')
    };

    function showSection(difficulty) {
        Object.keys(sections).forEach(key => {
            sections[key].style.display = key === difficulty ? 'block' : 'none';
        });
    }

    difficultyButton.addEventListener('change', (event) => {
        showSection(event.target.value);
    });

    // Show the default section
    showSection('easy');
});



