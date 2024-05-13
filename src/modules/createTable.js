import { opponent } from '../index';
import { styleCell } from './styleCell';

function createPlayerTable() {
  const playerTable = document.querySelector('.player-table');

  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');

    row.setAttribute('data-array-row', i);
    row.classList.add('row');

    for (let j = 0; j < 10; j++) {
      const element = document.createElement('div');

      element.classList.add('cell');
      element.setAttribute('data-row', i);
      element.setAttribute('data-col', j);
      row.appendChild(element);
    }

    playerTable.appendChild(row);
  }
}

function createOpponentsTable() {
  const opponentTable = document.querySelector('.opponent-table');

  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.setAttribute('data-array-row', i);
    row.classList.add('row');

    for (let j = 0; j < 10; j++) {
      const element = document.createElement('div');

      element.classList.add('cell');
      element.setAttribute('data-row', i);
      element.setAttribute('data-col', j);

      element.addEventListener('click', (e) => {
        const coordinates = [
          parseInt(e.target.dataset.row),
          parseInt(e.target.dataset.col),
        ];
        const value = opponent.gameBoard.receiveAttack(coordinates);
        styleCell(e.target, value);
        console.log(opponent.gameBoard.board);
        console.log(opponent.gameBoard.ships);
      });

      element.addEventListener('mouseover', () => {
        element.classList.add('hovered-cell');
      });
      element.addEventListener('mouseout', () => {
        element.classList.remove('hovered-cell');
      });
      row.appendChild(element);
    }

    opponentTable.appendChild(row);
  }
}

createPlayerTable();
createOpponentsTable();

export { createPlayerTable, createOpponentsTable };
