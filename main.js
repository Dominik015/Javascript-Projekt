import { Board } from './classes/board.js';
import { Player } from './classes/player.js';
import { WaveManagement } from './classes/WaveManagement.js';
import Enemy from './classes/enemy.js' 
import { LevelUp } from './classes/LeveUp.js';
import Projectile from './classes/projectile.js';
import { ProjectileManager } from './classes/ProjectileManager.js';

const levelUp = new LevelUp()
const board = new Board()
const player = new Player(100, 100,board)
const enemy = new Enemy(board)
const waveManagement = new WaveManagement(board)
const projectileManager = new ProjectileManager()
let IsPaused = false

  function GameLoop(){
    if(!IsPaused){

    
    board.ctx.clearRect(0, 0, board.gameBoard.width, board.gameBoard.height);
    
    player.update()
    player.CreatePlayer(board.ctx)
    player.levelUp(waveManagement.killedNemeyCount)
    waveManagement.killedNemeyCount = 0

    if(player.isLvlUp){
      player.lvlUpCards = levelUp.GetRandomCards()
    
      IsPaused = true
      console.log("PAUSED, cards:", player.lvlUpCards)
    }

    
    projectileManager.update(waveManagement.Allenemies,player.x,player.y,player.dmg)
    projectileManager.drawBullets(board.ctx)


    enemy.update(player.x,player.y)
    waveManagement.update(player.x,player.y)
    waveManagement.drawEnemy(board.ctx)
    }
      if(!player.isLvlUp){
        IsPaused = false
        console.log("UNPAUSED")
    }
    requestAnimationFrame(GameLoop)
 }
GameLoop()


window.addEventListener("keydown",player.ChooseBuff.bind(player))
window.addEventListener("keydown",player.buttonPressed.bind(player))
window.addEventListener("keyup", player.buttonReleased.bind(player))
