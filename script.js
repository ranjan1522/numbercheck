'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('😶 No Number...!!!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🏆 Correct Number Mactched...!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //document.querySelector('.highscore').textContent = score;
    let highValue = 0;
    if (score > highValue) {
      highValue = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📈 Too High Number...!!!'
          : '📉 Too Low Number...!!!'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('🙄 You loose the game...!!!');
      displayScore(0);
    }
  }
});

//Again Button
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
