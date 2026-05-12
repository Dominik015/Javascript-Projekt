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
let gamestarted = false
const playbutton = document.getElementById("playButton")
const resetbutton = document.getElementById("Reset")




  function GameLoop(){
    board.ctx.clearRect(0, 0, board.gameBoard.width, board.gameBoard.height);
    php.innerHTML = player.hp
    pdmg.innerHTML = player.dmg
    pspeed.innerHTML = player.speed
    if(waveManagement.Allenemies.length > 0){

    enemyHealth.innerHTML = waveManagement.Allenemies[0].hp
    enemyDamage.innerHTML = waveManagement.Allenemies[0].dmg
    }
    wave.innerHTML = waveManagement.wave
    //else 
    if(!IsPaused && gamestarted == true){

    

    
    player.update()
    player.CreatePlayer(board.ctx)
    player.levelUp(waveManagement.killedNemeyCount)
    waveManagement.killedNemeyCount = 0
    let buffcards = document.getElementById("buffcards")
    if(player.isLvlUp){
      player.lvlUpCards = levelUp.GetRandomCards()
      let card1 = document.getElementById("card1")
      let card2 = document.getElementById("card2")
      let card3 = document.getElementById("card3")

      card1.innerHTML = player.lvlUpCards[0].name
      card2.innerHTML = player.lvlUpCards[1].name
      card3.innerHTML = player.lvlUpCards[2].name

      buffcards.style.display = "block"

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
playbutton.addEventListener("click",function(){
  gamestarted = true
  playbutton.style.display = "none"
})
resetbutton.addEventListener("click", function(){
  location.reload()
})

    