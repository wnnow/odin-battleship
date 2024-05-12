import { Ship } from './ship';
// const Ship = require('./ship');

class GameBoard {
  constructor() {
    this.board = [];
  }

  createBoard() {
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(0);
      }
      this.board.push(row);
    }
  }

  placeShipHorizontal(shipLength, pairCoordinate) {
    for (let element of pairCoordinate) {
      if (element < 0 || element > 9) {
        return null;
      }
    }

    if (shipLength < 0 || shipLength > 5) return null;

    if (10 - pairCoordinate[1] >= shipLength) {
      if (!this.isHorizontalPosEmpty(shipLength, pairCoordinate)) return null;

      const ship = new Ship(shipLength);

      for (let i = 0; i < shipLength; i++) {
        this.board[pairCoordinate[0]][pairCoordinate[1]] = 'ship';
        ship.position.push([pairCoordinate[0], pairCoordinate[1]]);
        pairCoordinate[1]++;
      }

      return ship;
    }
  }

  isHorizontalPosEmpty(shipLength, pairCoordinate) {
    const tempArr = [...pairCoordinate];

    for (let i = 0; i < shipLength; i++) {
      if (this.board[tempArr[0]][tempArr[1]] === 'ship') {
        return false;
      }
      tempArr[1]++;
    }

    return true;
  }

  placeShipVertical(shipLength, pairCoordinate) {}

  // determines whether or not the attack hit a ship and
  // then sends the ‘hit’ function to the correct ship,
  // or records the coordinates of the missed shot.
  receiveAttack(pairCoordinate) {}

  isHit(pairCoordinate) {}
}

// const playerTableContainer = document.querySelector('#player-table-container');
// console.log('🚀 ~ playerTableContainer:', playerTableContainer);

export { GameBoard };
