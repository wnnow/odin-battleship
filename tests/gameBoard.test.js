import { GameBoard } from '../src/modules/gameBoard';

let testBoard;

beforeEach(() => {
  testBoard = new GameBoard();
});

test.skip('board should return []', () => {
  expect(testBoard.board).toEqual([]);
});

test.skip('after invoke createBoard(), board should return series of [0*10]*10', () => {
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

test.skip('placeShipHorizontal() return null when shipLength < 0', () => {
  expect(testBoard.placeShipHorizontal(-1, [1, 3])).toBe(null);
});

test.skip('placeShipHorizontal() return null when shipLength > 5', () => {
  expect(testBoard.placeShipHorizontal(6, [1, 3])).toBe(null);
});

test.skip('placeShipHorizontal() return null when pairCoordination[0] < 0', () => {
  expect(testBoard.placeShipHorizontal(1, [-1, 3])).toBe(null);
});

test.skip('placeShipHorizontal() return null when pairCoordination[1] > 9', () => {
  expect(testBoard.placeShipHorizontal(1, [0, 12])).toBe(null);
});

test('placeShipHorizontal() ', () => {
  testBoard.createBoard();
  testBoard.placeShipHorizontal(4, [2, 4]);

  //   expect(testBoard.placeShipHorizontal(1, [0, 12])).toBe(null);
});
