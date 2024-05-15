import { player, opponent, initializeGame } from '../index';
import { createPlayerTable, createOpponentsTable } from './createTable';
import { stylePlayerCell } from './player';
import {
  coordinatesArray,
  getDefaultCoordinatesArray,
  resetCoordinatesArray,
} from './computerAutoPlay';

const randomBtn = document.querySelector('#random-player-ship-position-btn');

const playerTable = document.querySelector('.player-table');
const opponentTable = document.querySelector('.opponent-table');

function randomShipPosition(player, opponent) {
  resetCoordinatesArray();
  player.gameBoard.resetBoard();
  opponent.gameBoard.resetBoard();

  removeAllChildElement(playerTable);
  removeAllChildElement(opponentTable);

  initializeGame();
  // player.gameBoard.createBoard();
  // opponent.gameBoard.createBoard();
  // createPlayerTable();
  // createOpponentsTable();

  // player.gameBoard.randomPlacingShipPos();
  // opponent.gameBoard.randomPlacingShipPos();

  // stylePlayerCell();
}

function removeAllChildElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

randomBtn.addEventListener('click', () => {
  randomShipPosition(player, opponent);
});

export { randomShipPosition };
