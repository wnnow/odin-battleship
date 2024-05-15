import { player, opponent } from '../index';
import { createPlayerTable, createOpponentsTable } from './createTable';
import { stylePlayerCell } from './player';

const randomBtn = document.querySelector('#random-player-ship-position');

const playerTable = document.querySelector('.player-table');
const opponentTable = document.querySelector('.opponent-table');

function randomShipPosition(player, opponent) {
  player.gameBoard.resetBoard();
  opponent.gameBoard.resetBoard();

  removeAllChildElement(playerTable);
  removeAllChildElement(opponentTable);

  player.gameBoard.createBoard();
  opponent.gameBoard.createBoard();
  createPlayerTable();
  createOpponentsTable();

  player.gameBoard.randomPlacingShipPos();
  opponent.gameBoard.randomPlacingShipPos();

  stylePlayerCell();
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
