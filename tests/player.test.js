import { Player } from '../src/modules/player';

let testPlayer;
beforeEach(() => {
  testPlayer = new Player();
});

test('player ships', () => {
  expect(testPlayer.gameBoard.ships[0]).toEqual({
    hitCounts: 0,
    length: 5,
    position: [],
    sunkStatus: false,
  });
});

test('create board as player', () => {
  testPlayer.gameBoard.createBoard();
  expect(testPlayer.gameBoard.board).toEqual([
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

test('placing ship horizontal ', () => {
  testPlayer.gameBoard.createBoard();
  testPlayer.gameBoard.placeShipHorizontal(
    testPlayer.gameBoard.ships[0],
    [4, 3]
  );
  expect(testPlayer.gameBoard.board).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 'ship', 'ship', 'ship', 'ship', 'ship', 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('placing ship vertical', () => {
  testPlayer.gameBoard.createBoard();
  testPlayer.gameBoard.placeShipVertical(testPlayer.gameBoard.ships[0], [0, 0]);
  expect(testPlayer.gameBoard.board).toEqual([
    ['ship', 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['ship', 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['ship', 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['ship', 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['ship', 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('receiveAttack ship vertical', () => {
  testPlayer.gameBoard.createBoard();
  testPlayer.gameBoard.placeShipVertical(testPlayer.gameBoard.ships[0], [4, 3]);
  //   expect(testPlayer.gameBoard.board).toEqual([
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 'ship', 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   ]);
  console.log(testPlayer.gameBoard.receiveAttack([8, 3]));
});
