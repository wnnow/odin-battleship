import { GameBoard } from '../src/modules/gameBoard';
import { Ship } from '../src/modules/ship';
let testBoard;

beforeEach(() => {
  testBoard = new GameBoard();
});

describe('GameBoard board', () => {
  test('board should return []', () => {
    expect(testBoard.board).toEqual([]);
  });

  test('after invoke createBoard(), board should return series of [0*10]*10', () => {
    testBoard.createBoard();
    expect(testBoard.board).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});

describe('placeShipHorizontal', () => {
  test('return null when ship.length < 0', () => {
    const testShip = new Ship(-1);
    expect(testBoard.placeShipHorizontal(testShip, [1, 3])).toBe(null);
  });

  test('return null when ship.length > 5', () => {
    const testShip = new Ship(6);
    expect(testBoard.placeShipHorizontal(testShip, [1, 3])).toBe(null);
  });

  test('return null when pairCoordination[0] < 0', () => {
    const testShip = new Ship(1);
    expect(testBoard.placeShipHorizontal(testShip, [-1, 3])).toBe(null);
  });

  test('return null when pairCoordination[0] > 9', () => {
    const testShip = new Ship(1);
    expect(testBoard.placeShipHorizontal(testShip, [23, 3])).toBe(null);
  });

  test('return null when pairCoordination[1] < 0', () => {
    const testShip = new Ship(4);
    expect(testBoard.placeShipHorizontal(testShip, [-5, 2])).toBe(null);
  });

  test('return null when pairCoordination[1] > 9', () => {
    const testShip = new Ship(1);
    expect(testBoard.placeShipHorizontal(testShip, [0, 12])).toBe(null);
  });

  test('correctly placing ship to specific position', () => {
    testBoard.createBoard();
    const testShip = new Ship(3);
    testBoard.placeShipHorizontal(testShip, [2, 2]);
    expect(testBoard.board).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 'ship', 'ship', 'ship', 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test('will not place another ship in an existing position that includes part of another ship.', () => {
    testBoard.createBoard();
    const testShip3 = new Ship(3);
    const testShip4 = new Ship(4);
    const testShip5 = new Ship(5);
    testBoard.placeShipHorizontal(testShip4, [2, 4]);
    testBoard.placeShipHorizontal(testShip3, [2, 2]);
    testBoard.placeShipHorizontal(testShip5, [2, 6]);
    expect(testBoard.board).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 'ship', 'ship', 'ship', 'ship', 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});

describe('placeShipVertical', () => {
  test('return null when ship.length < 0', () => {
    const testShip = new Ship(-1);
    expect(testBoard.placeShipVertical(testShip, [1, 3])).toBe(null);
  });

  test('return null when ship.length > 5', () => {
    const testShip = new Ship(6);
    expect(testBoard.placeShipVertical(testShip, [1, 3])).toBe(null);
  });

  test('return null when pairCoordination[0] < 0', () => {
    const testShip = new Ship(1);
    expect(testBoard.placeShipVertical(testShip, [-1, 3])).toBe(null);
  });

  test('return null when pairCoordination[0] > 9', () => {
    const testShip = new Ship(1);
    expect(testBoard.placeShipVertical(testShip, [23, 3])).toBe(null);
  });

  test('return null when pairCoordination[1] < 0', () => {
    const testShip = new Ship(4);
    expect(testBoard.placeShipVertical(testShip, [-5, 2])).toBe(null);
  });

  test('return null when pairCoordination[1] > 9', () => {
    const testShip = new Ship(1);
    expect(testBoard.placeShipVertical(testShip, [0, 12])).toBe(null);
  });

  test('correctly placing ship to specific position', () => {
    testBoard.createBoard();
    const testShip = new Ship(3);
    testBoard.placeShipVertical(testShip, [2, 2]);
    expect(testBoard.board).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 'ship', 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 'ship', 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 'ship', 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
  test('will not place another ship in an existing position that includes part of another ship.', () => {
    testBoard.createBoard();
    const testShip4 = new Ship(4);
    const testShip5 = new Ship(5);
    testBoard.placeShipVertical(testShip5, [0, 3]);
    testBoard.placeShipVertical(testShip4, [3, 3]);

    expect(testBoard.board).toEqual([
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});

describe('place both vertical and horizontal', () => {
  test('placing ship use both vertical and horizontal function in cross position', () => {
    testBoard.createBoard();
    const testShipVer5 = new Ship(5);
    const testShipHori5 = new Ship(5);
    testBoard.placeShipVertical(testShipVer5, [0, 3]);
    testBoard.placeShipHorizontal(testShipHori5, [2, 0]);
    expect(testBoard.board).toEqual([
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test('placing ship use both vertical and horizontal function in separate position', () => {
    testBoard.createBoard();
    const testShipVer4 = new Ship(4);
    const testShipVer5 = new Ship(5);
    const testShipHori3 = new Ship(3);
    const testShipHori2 = new Ship(2);
    testBoard.placeShipVertical(testShipVer5, [0, 3]);
    testBoard.placeShipVertical(testShipVer4, [6, 6]);
    testBoard.placeShipHorizontal(testShipHori3, [6, 0]);
    testBoard.placeShipHorizontal(testShipHori2, [0, 8]);
    expect(testBoard.board).toEqual([
      [0, 0, 0, 'ship', 0, 0, 0, 0, 'ship', 'ship'],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['ship', 'ship', 'ship', 0, 0, 0, 'ship', 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 'ship', 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 'ship', 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 'ship', 0, 0, 0],
    ]);
  });
});

test('random placing ship', () => {
  testBoard.createBoard();
  testBoard.randomPlacingShipPos();
  console.log(testBoard.board);
  console.log(testBoard.ships[0]);
  console.log(testBoard.ships[1]);
  console.log(testBoard.ships[2]);
  console.log(testBoard.ships[3]);
  console.log(testBoard.ships[4]);
});

test('is game end = false', () => {
  expect(testBoard.isGameEnd()).toBe(false);
});

test('is game end = true', () => {
  testBoard.createBoard();
  testBoard.randomPlacingShipPos();
  expect(testBoard.isGameEnd()).toBe(false);
  for (const key in testBoard.ships) {
    for (const coordinates of testBoard.ships[key].position) {
      testBoard.receiveAttack(coordinates);
    }
  }
  expect(testBoard.isGameEnd()).toBe(true);
});
const coordinatesArray = [];
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    coordinatesArray.push([i, j]);
  }
}
