import Projectile from './projectile.js'
export class ProjectileManager{
    constructor(){
        
        this.projectiles = []
        this.shootCd = 0
    }

    update(enemies,playerX,playerY,playerDmg){
        if(this.shootCd>=60){
            this.projectiles.push(new Projectile(playerX,playerY,playerDmg))
            this.shootCd = 0
        }
        this.shootCd++

        for(let projectile of this.projectiles){
            projectile.update(enemies)
        }
    }

    drawBullets(ctx){
        for(let projectile of this.projectiles){
            projectile.CreateBullet(ctx)
        }
    }
}