import { GameBoard } from '../src/modules/gameBoard';

let testBoard;

beforeEach(() => {
  testBoard = new GameBoard();
});

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

describe('placeShipHorizontal', () => {
  test('return null when shipLength < 0', () => {
    expect(testBoard.placeShipHorizontal(-1, [1, 3])).toBe(null);
  });

  test('return null when shipLength > 5', () => {
    expect(testBoard.placeShipHorizontal(6, [1, 3])).toBe(null);
  });

  test('return null when pairCoordination[0] < 0', () => {
    expect(testBoard.placeShipHorizontal(1, [-1, 3])).toBe(null);
  });

  test('return null when pairCoordination[0] > 9', () => {
    expect(testBoard.placeShipHorizontal(1, [23, 3])).toBe(null);
  });

  test('return null when pairCoordination[1] < 0', () => {
    expect(testBoard.placeShipHorizontal(4, [-5, 2])).toBe(null);
  });

  test('return null when pairCoordination[1] > 9', () => {
    expect(testBoard.placeShipHorizontal(1, [0, 12])).toBe(null);
  });

  test('correctly placing ship to specific position', () => {
    testBoard.createBoard();
    testBoard.placeShipHorizontal(3, [2, 2]);
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
    testBoard.placeShipHorizontal(4, [2, 4]);
    testBoard.placeShipHorizontal(3, [2, 2]);
    testBoard.placeShipHorizontal(5, [2, 6]);
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
  test('return null when shipLength < 0', () => {
    expect(testBoard.placeShipVertical(-1, [1, 3])).toBe(null);
  });

  test('return null when shipLength > 5', () => {
    expect(testBoard.placeShipVertical(6, [1, 3])).toBe(null);
  });

  test('return null when pairCoordination[0] < 0', () => {
    expect(testBoard.placeShipVertical(1, [-1, 3])).toBe(null);
  });

  test('return null when pairCoordination[0] > 9', () => {
    expect(testBoard.placeShipVertical(1, [23, 3])).toBe(null);
  });

  test('return null when pairCoordination[1] < 0', () => {
    expect(testBoard.placeShipVertical(4, [-5, 2])).toBe(null);
  });

  test('return null when pairCoordination[1] > 9', () => {
    expect(testBoard.placeShipVertical(1, [0, 12])).toBe(null);
  });

  test('correctly placing ship to specific position', () => {
    testBoard.createBoard();
    testBoard.placeShipVertical(3, [2, 2]);
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
    testBoard.placeShipVertical(5, [0, 3]);
    testBoard.placeShipVertical(4, [3, 3]);

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

test('placing ship use both vertical and horizontal function in cross position', () => {
  testBoard.createBoard();
  testBoard.placeShipVertical(5, [0, 3]);
  testBoard.placeShipHorizontal(5, [2, 0]);
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
test('placing ship use both vertical and horizontal function in cross position', () => {
  testBoard.createBoard();
  testBoard.placeShipVertical(5, [0, 3]);
  testBoard.placeShipVertical(4, [6, 6]);
  testBoard.placeShipHorizontal(3, [6, 0]);
  testBoard.placeShipHorizontal(2, [0, 8]);
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
