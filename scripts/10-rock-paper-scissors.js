let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function pickComputerMove() {
  let computerMove;
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 & randomNumber < 2 / 3) {
    computerMove = 'paper';
    } else {
    computerMove = 'scissors';
  }
  return computerMove;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = ` Wins: ${score.wins}, Loses: ${score.losses}, Ties ${score.ties}`;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result;

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You Lose!';
    } else {
      result = 'You Win!';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win!';
    } else if (computerMove === 'paper') {
      result = 'You Tie!';
    } else {
      result = 'You Lose!';
    }
  } else {
    if (computerMove === 'rock') {
      result = 'You Lose!';
    } else if (computerMove === 'paper') {
      result = 'You Win!';
    } else {
      result = 'You Tie!';
    }
  }

  if (result === 'You Win!') {
    score.wins++;
  } else if (result === 'You Lose!') {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = `You ${result}!`;

  document.querySelector('.js-moves').innerHTML = `You: ${playerMove} - ${computerMove} Computer`;
}