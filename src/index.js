import './style.css';
import { createPlayerTable, createOpponentsTable } from './modules/createTable';
import { findPlayerCell } from './modules/findPlayerCell';
import { Player } from './modules/player';
import { randomShootPlayerShip } from './modules/computerAutoPlay';

const opponent = new Player();
const player = new Player();

opponent.gameBoard.createBoard();
player.gameBoard.createBoard();

opponent.gameBoard.randomPlacingShipPos();
player.gameBoard.randomPlacingShipPos();

export { opponent, player };
