export default class projectile{
    constructor(playerX,playerY,Dmg){
        this.x = playerX
        this.y = playerY
        this.speed = 10
        this.width = 5
        this.height = 5
        this.dmg = Dmg
        this.hp = 1

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

            if(dist<15){
                this.hp -=2
                ClosestEnemy.hp -=3
            }
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