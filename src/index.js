import './style.css';
import { createPlayerTable, createOpponentsTable } from './modules/createTable';
import { findPlayerCell } from './modules/findPlayerCell';
import { Player, stylePlayerCell } from './modules/player';
import { randomShootPlayerShip } from './modules/computerAutoPlay';
import { Ship } from './modules/ship';
import { randomShipPosition } from './modules/randomShipPosBtn';
import { createEndGamePopup } from './modules/endGamePopup';

// const opponent = new Player();
// const player = new Player();

// opponent.gameBoard.createBoard();
// player.gameBoard.createBoard();

// opponent.gameBoard.randomPlacingShipPos();
// player.gameBoard.randomPlacingShipPos();
// stylePlayerCell();
// createEndGamePopup();

let opponent;
let player;
function initializeGame() {
  opponent = new Player();
  player = new Player();
  opponent.gameBoard.createBoard();
  player.gameBoard.createBoard();

  opponent.gameBoard.randomPlacingShipPos();
  player.gameBoard.randomPlacingShipPos();
  createPlayerTable();
  createOpponentsTable();
  stylePlayerCell();
}
initializeGame();

export { opponent, player, initializeGame };
