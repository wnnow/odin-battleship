import './style.css';
import { createPlayerTable, createOpponentsTable } from './modules/createTable';
import { findPlayerCell } from './modules/findPlayerCell';
import { Player } from './modules/player';

const opponent = new Player();
opponent.gameBoard.createBoard();

export { opponent };
