import './style.css';
import { createPlayerTable, createOpponentsTable } from './modules/createTable';
import { findPlayerCell } from './modules/findPlayerCell';
import { Player, stylePlayerCell } from './modules/player';
import { randomShootPlayerShip } from './modules/computerAutoPlay';
import { Ship } from './modules/ship';

const opponent = new Player();
const player = new Player();

opponent.gameBoard.createBoard();
player.gameBoard.createBoard();

opponent.gameBoard.randomPlacingShipPos();
player.gameBoard.randomPlacingShipPos();
stylePlayerCell();

export { opponent, player };
