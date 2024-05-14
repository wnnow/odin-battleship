import { GameBoard } from './gameBoard';
import { player } from '../index.js';
import { findPlayerCell } from './findPlayerCell.js';

class Player {
  constructor() {
    this.gameBoard = new GameBoard();
  }
}

function stylePlayerCell() {
  player.gameBoard.board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col === 'ship') {
        const cell = findPlayerCell([rowIndex, colIndex]);
        cell.classList.add('ship');
      }
    });
  });
}

export { Player, stylePlayerCell };
