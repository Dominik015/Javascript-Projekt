import Enemy from './enemy.js'
export class WaveManagement{
    constructor(board){
        this.board = board
        this.wave = 1
        this.enemies = []
        this.spwanChance = 0.01
        this.enemyCount = 10
    }

    update(playerX,playerY){
        
        if(this.enemies.length<this.enemyCount){
            if(Math.random()<this.spwanChance){
                this.enemies.push(new Enemy(this.board))
            }
        }

        for(let enemy of this.enemies){
            enemy.update(playerX,playerY)
        }
    }

    LevelUp(){
        this.spwanChance+=0.005
        this.enemyCount+=5
    }
    

    drawEnemy(ctx){
        for(let enemy of this.enemies){
            enemy.CreateEnemy(ctx)
        }
    }
}