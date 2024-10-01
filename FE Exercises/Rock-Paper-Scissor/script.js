let computer;
const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function playGame(user) {
  computer = computerChoice();
  result(user, computer);
}

function computerChoice() {
  let val = Math.random();
  if (val > 0 && val <= 1 / 3) {
    computer = 'rock';
  } else if (val > 1 / 3 && val <= 2 / 3) {
    computer = 'paper';
  } else {
    computer = 'scissors';
  }
  return computer;
}

function result(user, computer) {
  let result;

  if (user === computer) {
    result = 'Tie.';
    score.ties += 1;
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    result = 'You Win!';
    score.wins += 1;
  } else {
    result = 'You Lose.';
    score.losses += 1;
  }

  document.querySelector('.result').innerHTML = `${result}`;
  document.querySelector(
    '.showResult'
  ).innerHTML = `You <img src="Images/${user}-emoji.png" alt="" /> <img src="Images/${computer}-emoji.png" alt="" /> Computer`;
  scoreUpdate();
}

function scoreUpdate() {
  document.querySelector(
    '.scores'
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  document.querySelector('.scores').innerHTML = '';
  document.querySelector('.result').innerHTML = ``;
  document.querySelector('.showResult').innerHTML = '';
}
