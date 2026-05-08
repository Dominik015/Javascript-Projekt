import { Board } from './classes/board.js';
import { Player } from './classes/player.js';


const board = new Board()
const player = new Player(100, 100)


function HandleKeyDown(event){
    player.ChangeDirection(event)
    updateGame()
}

 function updateGame(){
    board.ctx.clearRect(0, 0, board.gameBoard.width, board.gameBoard.height);
    player.CreatePlayer(board.ctx)
 }
window.addEventListener("keydown",HandleKeyDown)

player.CreatePlayer(board.ctx)