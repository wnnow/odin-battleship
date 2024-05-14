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

      return true;
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
      return true;
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
    //if this position got hit before return
    if (this.board[coordinates[0]][coordinates[1]] === 'hit') {
      return;
    }

    // if miss change 0 to 'miss'
    if (this.board[coordinates[0]][coordinates[1]] === 0) {
      this.board[coordinates[0]][coordinates[1]] = 'miss';
      return this.board[coordinates[0]][coordinates[1]];
    }

    // if hit the ship
    if (this.board[coordinates[0]][coordinates[1]] === 'ship') {
      //find ship in that position which one of player or computer ship
      let hitResult = null;
      this.ships.forEach((ship) => {
        if (
          ship.position.some(
            (pos) => pos[0] === coordinates[0] && pos[1] === coordinates[1]
          )
        ) {
          ship.hit();
          hitResult = 'hit';
          this.board[coordinates[0]][coordinates[1]] = 'hit';
        }
      });
      return hitResult;
    }
  }

  randomPlacingShipPos() {
    for (let ship of this.ships) {
      let placed = false;
      while (!placed) {
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 10);
        const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';

        if (orientation === 'horizontal') {
          placed = this.placeShipHorizontal(ship, [randomX, randomY]);
        } else {
          placed = this.placeShipVertical(ship, [randomX, randomY]);
        }
      }

      // Ensure ship's position length matches its length
      if (ship.position.length !== ship.length) {
        ship.position = []; // Reset position if not placed properly
        this.randomPlacingShipPosition(); // Try placing the ship again
        return; // Exit the loop
      }
    }
  }

  isGameEnd() {
    return this.ships.every((ship) => ship.sunkStatus == true);
  }
}

export { GameBoard };
