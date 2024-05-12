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

  placeShipHorizontal(ship, pairCoordinate) {
    for (let element of pairCoordinate) {
      if (element < 0 || element > 9) {
        return null;
      }
    }

    if (ship.length < 0 || ship.length > 5) return null;

    if (10 - pairCoordinate[1] >= ship.length) {
      if (!this.isHorizontalPosEmpty(ship.length, pairCoordinate)) return null;

      for (let i = 0; i < ship.length; i++) {
        this.board[pairCoordinate[0]][pairCoordinate[1]] = 'ship';
        ship.position.push([pairCoordinate[0], pairCoordinate[1]]);
        pairCoordinate[1]++;
      }

      return;
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

  placeShipVertical(ship, pairCoordinate) {
    for (let element of pairCoordinate) {
      if (element < 0 || element > 9) {
        return null;
      }
    }

    if (ship.length < 0 || ship.length > 5) return null;

    if (10 - pairCoordinate[0] >= ship.length) {
      if (!this.isVerticalPosEmpty(ship.length, pairCoordinate)) return null;

      for (let i = 0; i < ship.length; i++) {
        this.board[pairCoordinate[0]][pairCoordinate[1]] = 'ship';
        ship.position.push([pairCoordinate[0], pairCoordinate[1]]);
        pairCoordinate[0]++;
      }
    }
  }

  isVerticalPosEmpty(shipLength, pairCoordinate) {
    const tempArr = [...pairCoordinate];

    for (let i = 0; i < shipLength; i++) {
      if (this.board[tempArr[0]][tempArr[1]] === 'ship') {
        return false;
      }
      tempArr[0]++;
    }

    return true;
  }

  // determines whether or not the attack hit a ship and
  // then sends the ‘hit’ function to the correct ship,
  // or records the coordinates of the missed shot.
  receiveAttack(pairCoordinate) {
    for (let element of pairCoordinate) {
      if (element < 0 || element > 9) {
        return null;
      }
    }

    if (this.isHit(pairCoordinate)) {
      // if miss change 0 to 'miss'
      if (this.board[pairCoordinate[0]][pairCoordinate[1]] === 0) {
        this.board[pairCoordinate[0]][pairCoordinate[1]] = 'miss';
        return;
      }
      // if hit the ship
      if (this.board[pairCoordinate[0]][pairCoordinate[1]] === 'ship') {
      }
      //check that pos have ship or not
    }
  }

  isHit(pairCoordinate) {
    const tempArr = [...pairCoordinate];
    if (this.board[tempArr[0]][tempArr[1]] === 'ship') {
      return true;
    }
    return false;
  }
}

// const playerTableContainer = document.querySelector('#player-table-container');
// console.log('🚀 ~ playerTableContainer:', playerTableContainer);

export { GameBoard };
