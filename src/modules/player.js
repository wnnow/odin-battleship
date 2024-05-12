import { GameBoard } from './gameBoard';
import { Ship } from './ship';

class Player {
  constructor() {
    this.gameBoard = new GameBoard();
  }
}

export { Player };
