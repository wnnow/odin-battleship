import { player, opponent, initializeGame } from '../index';
import { randomShipPosition } from './randomShipPosBtn';

function createEndGamePopup() {
  const body = document.querySelector('body');
  const main = document.querySelector('#main');
  const popupContainer = document.createElement('div');
  const popupText = document.createElement('div');
  const playAgainBtn = document.createElement('button');

  main.classList.add('blur-background');
  popupContainer.classList.add('popup-container');
  popupText.classList.add('popup-text');
  playAgainBtn.setAttribute('id', 'play-again-btn');
  playAgainBtn.setAttribute('type', 'click');

  if (player.gameBoard.isGameEnd()) {
    popupText.textContent = 'You lose!';
  }

  if (opponent.gameBoard.isGameEnd()) {
    popupText.textContent = 'You Win!';
  }

  // popupText.textContent = player.gameBoard.isGameEnd()
  //   ? 'You lose!'
  //   : 'You Win!';

  playAgainBtn.textContent = 'Play Again';
  playAgainBtn.addEventListener('click', () => {
    randomShipPosition(player, opponent);
    main.classList.remove('blur-background');
    removePopup();
  });

  popupContainer.appendChild(popupText);
  popupContainer.appendChild(playAgainBtn);
  body.appendChild(popupContainer);
}

function removePopup() {
  const popup = document.querySelector('.popup-container');
  const body = document.querySelector('body');
  body.removeChild(popup);
}

export { createEndGamePopup };
