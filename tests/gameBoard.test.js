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

test('placeShipHorizontal() return null when shipLength < 0', () => {
  expect(testBoard.placeShipHorizontal(-1, [1, 3])).toBe(null);
});

test('placeShipHorizontal() return null when shipLength > 5', () => {
  expect(testBoard.placeShipHorizontal(6, [1, 3])).toBe(null);
});

test('placeShipHorizontal() return null when pairCoordination[0] < 0', () => {
  expect(testBoard.placeShipHorizontal(1, [-1, 3])).toBe(null);
});

test('placeShipHorizontal() return null when pairCoordination[0] > 9', () => {
  expect(testBoard.placeShipHorizontal(1, [23, 3])).toBe(null);
});

test('placeShipHorizontal() return null when pairCoordination[1] < 0', () => {
  expect(testBoard.placeShipHorizontal(4, [-5, 2])).toBe(null);
});

test('placeShipHorizontal() return null when pairCoordination[1] > 9', () => {
  expect(testBoard.placeShipHorizontal(1, [0, 12])).toBe(null);
});

test('placeShipHorizontal() equal to specific position', () => {
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

test('placeShipHorizontal() will not place another ship in an existing position that includes part of another ship.', () => {
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
