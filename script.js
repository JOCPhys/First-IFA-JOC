const cards = document.querySelectorAll('.hazard-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchCount = 0;
let moveCount = 0;
let gameStarted = false;
let timerInterval;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!gameStarted) {
    gameStarted = true;
    startTimer();
  }

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  if (!firstCard || !secondCard) {
    console.error("One or both cards are undefined");
    return;
  } else {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    isMatch ? disableCards() : unflipCards();
    moveCounter();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matchCounter();
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    if (firstCard && secondCard) {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }
    resetBoard();
  }, 1200);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function startTimer() {
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

function moveCounter() {
  moveCount++;
  document.getElementById('number-of-moves').textContent = moveCount;
}

function matchCounter() {
  matchCount++;
  document.getElementById('correct-matches').textContent = matchCount;
  if (matchCount === 8) {
    alert("Congratulations! You have matched all the cards!");
    clearInterval(timerInterval);
  }
}

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
}

(function shuffleOnLoad() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
})();

function resetGame() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
  matchCount = 0;
  moveCount = 0;
  gameStarted = false;

  document.getElementById('correct-matches').textContent = '0';
  document.getElementById('number-of-moves').textContent = '0';
  document.getElementById('timer').textContent = '00:00';

  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
  });

  setTimeout(() => {
    shuffle();
  }, 500);
}

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

  showSection('easy');
});



