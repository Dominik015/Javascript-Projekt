export default class projectile{
    constructor(playerX,playerY,Dmg){
        this.x = playerX
        this.y = playerY
        this.speed = 5
        this.width = 5
        this.height = 5
        this.dmg = Dmg

    }

    update(enemies){
        let ClosestEnemy = null
        let ClosestDist = Infinity

        for(let enemy of enemies){
            let dx = enemy.x - this.x
            let dy = enemy.y - this.y
            let dist = Math.sqrt(dx*dx+dy*dy)
        
            if(dist<ClosestDist){
                ClosestDist = dist
                ClosestEnemy = enemy
            }
        }

        if(ClosestEnemy){
            let dx = ClosestEnemy.x - this.x
            let dy = ClosestEnemy.y - this.y

            let dist = Math.sqrt(dx*dx+dy*dy)

            this.x += (dx/dist) * this.speed
            this.y += (dy/dist) * this.speed
        }


    }

    CreateBullet(ctx){

        ctx.fillStyle = "black"
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }

    ShootBullet(){
        if(this.shootCd<=60){
            this.projectiles.push(this)
            this.shootCd==0
        }
        this.shootCd++
    }
}