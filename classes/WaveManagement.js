import Enemy from './enemy.js'
export class WaveManagement{
    constructor(board){
        this.board = board
        this.spawnInterval = 60
        this.frameCount = 0
        this.wave = 1
        this.enemies = []
        this.enemiesSpawned = 0
        this.enemyCount = 5
    }

    update(playerX,playerY){
        this.frameCount++
        if(this.frameCount>this.spawnInterval && this.enemiesSpawned<this.enemyCount){
            this.enemies.push(new Enemy(this.board))
            this.enemiesSpawned++
            this.frameCount = 0
        }

        for(let enemy of this.enemies){
            enemy.update(playerX,playerY)
        }
    }
    

    drawEnemy(ctx){
        for(let enemy of this.enemies){
            enemy.CreateEnemy(ctx)
        }
    }
}