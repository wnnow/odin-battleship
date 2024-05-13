import { Ship } from './ship';

class GameBoard {
  constructor() {
    this.board = [];
    this.ships = [
      new Ship(5),
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
    ];
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

  placeShipHorizontal(ship, coordinates) {
    for (let element of coordinates) {
      if (element < 0 || element > 9) {
        return null;
      }
    }

    if (ship.length < 0 || ship.length > 5) return null;

    if (10 - coordinates[1] >= ship.length) {
      if (!this.isHorizontalPosEmpty(ship.length, coordinates)) return null;

      for (let i = 0; i < ship.length; i++) {
        this.board[coordinates[0]][coordinates[1]] = 'ship';
        ship.position.push([coordinates[0], coordinates[1]]);
        coordinates[1]++;
      }

      return;
    }
  }

  isHorizontalPosEmpty(shipLength, coordinates) {
    const tempArr = [...coordinates];

    for (let i = 0; i < shipLength; i++) {
      if (this.board[tempArr[0]][tempArr[1]] === 'ship') {
        return false;
      }
      tempArr[1]++;
    }

    return true;
  }

  placeShipVertical(ship, coordinates) {
    for (let element of coordinates) {
      if (element < 0 || element > 9) {
        return null;
      }
    }

    if (ship.length < 0 || ship.length > 5) return null;

    if (10 - coordinates[0] >= ship.length) {
      if (!this.isVerticalPosEmpty(ship.length, coordinates)) return null;

      for (let i = 0; i < ship.length; i++) {
        this.board[coordinates[0]][coordinates[1]] = 'ship';
        ship.position.push([coordinates[0], coordinates[1]]);
        coordinates[0]++;
      }
    }
  }

  isVerticalPosEmpty(shipLength, coordinates) {
    const tempArr = [...coordinates];

    for (let i = 0; i < shipLength; i++) {
      if (this.board[tempArr[0]][tempArr[1]] === 'ship') {
        return false;
      }
      tempArr[0]++;
    }

    return true;
  }

  receiveAttack(coordinates) {
    for (let num of coordinates) {
      if (num < 0 || num > 9) {
        return null;
      }
    }

    // if miss change 0 to 'miss'
    if (this.board[coordinates[0]][coordinates[1]] === 0) {
      this.board[coordinates[0]][coordinates[1]] = 'miss';
      return this.board[coordinates[0]][coordinates[1]];
    }

    // if hit the ship
    if (this.board[coordinates[0]][coordinates[1]] === 'ship') {
      //find ship in that position which one of player or computer ship
      this.ships.forEach((ship) => {
        if (
          ship.position.some(
            (pos) => pos[0] === coordinates[0] && pos[1] === coordinates[1]
          )
        ) {
          ship.hit();
          return this.board[coordinates[0]][coordinates[1]];
        }
      });
    }
  }
}

export { GameBoard };
