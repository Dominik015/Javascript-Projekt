import Enemy from './enemy.js'
export class WaveManagement{
    constructor(board){
        this.board = board
        this.wave = 1
        this.Allenemies = []
        this.spwanChance = 0.01
        this.enemyCount = 10
        this.killedNemeyCount = 0
    }

    update(playerX,playerY){
        //SHORTER
        //this.enemies = this.enemies.filter(enemy=>enemy.hp>0)
        let enemies = []
        for(let enemy of this.Allenemies){
            if(enemy.hp>0){
                enemies.push(enemy)
            }
        }
        this.Allenemies = enemies

        if(this.Allenemies.length<this.enemyCount){
            if(Math.random()<this.spwanChance){
                this.Allenemies.push(new Enemy(this.board))
            }
        }

        for(let enemy of this.Allenemies){
            enemy.update(playerX,playerY)
        }
    }

    LevelUp(){
        this.spwanChance+=0.005
        this.enemyCount+=5
    }
    

    drawEnemy(ctx){
        for(let enemy of this.Allenemies){
            enemy.CreateEnemy(ctx)
        }
    }
}