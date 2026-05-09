import { Board } from './classes/board.js';
import { Player } from './classes/player.js';
import Enemy from './classes/enemy.js' 
const board = new Board()
const player = new Player(100, 100,board)
const enemy = new Enemy(board)

function HandleKeyDown(event){
    player.ChangeDirection(event)
    updateGame()
}

 function GameLoop(){
    board.ctx.clearRect(0, 0, board.gameBoard.width, board.gameBoard.height);
    player.update()
    player.CreatePlayer(board.ctx)
    enemy.update(player.x,player.y)
    enemy.CreateEnemy(board.ctx)
    requestAnimationFrame(GameLoop)
 }
GameLoop()

window.addEventListener("keydown",player.buttonPressed.bind(player))
window.addEventListener("keyup", player.buttonReleased.bind(player))
enemy.CreateEnemy(board.ctx)
player.CreatePlayer(board.ctx)