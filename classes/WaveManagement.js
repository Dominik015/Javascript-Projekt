import Enemy from './enemy.js'
export class WaveManagement{
    constructor(board){
        this.board = board
        this.wave = 1
        this.Allenemies = []
        this.spwanChance = 0.01
        this.enemyCount = 10
        this.killedNemeyCount = 0
        this.spawnEnemy = false
        this.enemydamagebuff = 0
        this.enemyhpbuff = 0
        
    }

    update(player){
        //SHORTER
        //this.enemies = this.enemies.filter(enemy=>enemy.hp>0)
        let enemies = []
        for(let enemy of this.Allenemies){
            if(enemy.hp>0){
                enemies.push(enemy)
            }else{
                this.killedNemeyCount++
            }
        }
        this.Allenemies = enemies

        if(this.Allenemies.length<this.enemyCount){
            if(Math.random()<this.spwanChance){
                this.spawnEnemy = true
                this.spawnenemy() 
            }
        }

        for(let enemy of this.Allenemies){
            enemy.update(player)
        }
    }

    levelUp(){
        this.spwanChance+=0.005
        this.enemyCount+=5
        this.enemyhpbuff +=2
        this.enemydamagebuff += 2
        
    }
    

    drawEnemy(ctx){
        for(let enemy of this.Allenemies){
            enemy.CreateEnemy(ctx)
        }
    }



        spawnenemy(){
            let newEnemy = new Enemy(this.board)
            
            newEnemy.hp += this.enemyhpbuff
            newEnemy.MaxHp = newEnemy.hp
            newEnemy.dmg += this.enemydamagebuff
            this.Allenemies.push(newEnemy)
        }
}