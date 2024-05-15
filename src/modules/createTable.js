import { opponent, player } from '../index';
import { styleCell } from './styleCell';
import {
  randomShootPlayerShip,
  handlePlayerShotCoordinates,
} from './computerAutoPlay';
import { createEndGamePopup } from './endGamePopup';

function createPlayerTable() {
  const playerTable = document.querySelector('.player-table');

  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');

    row.setAttribute('data-array-row', i);
    row.classList.add('row');

    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');

      cell.classList.add('cell');
      cell.setAttribute('data-row', i);
      cell.setAttribute('data-col', j);
      row.appendChild(cell);
    }

    playerTable.appendChild(row);
  }
}

function createOpponentsTable() {
  const opponentTable = document.querySelector('.opponent-table');

  //create row element
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.setAttribute('data-array-row', i);
    row.classList.add('row');

    //create cell cell
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');

      cell.classList.add('cell');
      cell.setAttribute('data-row', i);
      cell.setAttribute('data-col', j);

      cell.addEventListener('click', (e) => {
        if (
          cell.classList.contains('hit') ||
          cell.classList.contains('miss') ||
          opponent.gameBoard.isGameEnd()
        ) {
          return;
        }

        const coordinates = [
          parseInt(e.target.dataset.row),
          parseInt(e.target.dataset.col),
        ];

        const value = opponent.gameBoard.receiveAttack(coordinates);

        styleCell(e.target, value);
        if (opponent.gameBoard.isGameEnd()) {
          createEndGamePopup();
        }

        const playerShotCoordinates = randomShootPlayerShip();
        handlePlayerShotCoordinates(playerShotCoordinates);
      });

      cell.addEventListener('mouseover', () => {
        cell.classList.add('hovered-cell');
      });

      cell.addEventListener('mouseout', () => {
        cell.classList.remove('hovered-cell');
      });

      row.appendChild(cell);
    }

    opponentTable.appendChild(row);
  }
}

export { createPlayerTable, createOpponentsTable };
