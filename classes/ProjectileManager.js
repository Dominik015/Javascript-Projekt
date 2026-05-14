import Projectile from './projectile.js'
export class ProjectileManager{
    constructor(){
        
        this.projectiles = []
        this.shootCd = 0
    }

    update(enemies,playerX,playerY,playerDmg){
        let AllProjectiles = []
        for(let projectile of this.projectiles){
            if(projectile.hp>0){
                AllProjectiles.push(projectile)
            }
        }
        this.projectiles = AllProjectiles

        
        if(this.shootCd>=60 && enemies.length > 0){
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