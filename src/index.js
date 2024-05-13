import './style.css';
import { createPlayerTable, createOpponentsTable } from './modules/createTable';
import { findPlayerCell } from './modules/findPlayerCell';
import { Player } from './modules/player';

const opponent = new Player();
const player = new Player();
opponent.gameBoard.createBoard();
player.gameBoard.createBoard();
opponent.gameBoard.randomPlacingShipPos();

export { opponent };
