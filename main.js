import { Board } from './classes/board.js';
import { Player } from './classes/player.js';
import { WaveManagement } from './classes/WaveManagement.js';
import Enemy from './classes/enemy.js' 
const board = new Board()
const player = new Player(100, 100,board)
const enemy = new Enemy(board)
const waveManagement = new WaveManagement(board)

function HandleKeyDown(event){
    player.ChangeDirection(event)
    updateGame()
}

 function GameLoop(){
    board.ctx.clearRect(0, 0, board.gameBoard.width, board.gameBoard.height);
    player.update()
    player.CreatePlayer(board.ctx)
    enemy.update(player.x,player.y)
    waveManagement.update(player.x,player.y)
    waveManagement.drawEnemy(board.ctx)
    requestAnimationFrame(GameLoop)
 }
GameLoop()

window.addEventListener("keydown",player.buttonPressed.bind(player))
window.addEventListener("keyup", player.buttonReleased.bind(player))
