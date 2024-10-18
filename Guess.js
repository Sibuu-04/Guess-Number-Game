'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //when  there is no input in checkbox
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }

  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b';
    document.querySelector('.number').style.width = '40rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent =
        '🏅HighScore :' + highscore;
    }
  }

  // When guess is too high
  else if (guess > secretNumber) {
    if (score == 0) {
      document.querySelector('.message').textContent = 'You Lost the Game!🥲';
    } else {
      document.querySelector('.message').textContent = '📈Too High!';
      score--;
      document.querySelector('.score').textContent = '💯 Score: ' + score;
    }
  }
  //when guess is too Low
  else if (guess < secretNumber) {
    if (score == 0) {
      document.querySelector('.message').textContent = 'You Lost the Game!🥲';
    } else {
      document.querySelector('.message').textContent = '📉Too Low!';
      score--;
      document.querySelector('.score').textContent = '💯 Score: ' + score;
    }
  }
  // when guess is wrong
  else {
    document.querySelector('.message').textContent = '❌Wrong guess Try Agian!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing...!';
  document.querySelector('.score').textContent = '💯 Score: ' + score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
