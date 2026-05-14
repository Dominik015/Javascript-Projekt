export default class enemy{
    constructor(board){
        this.BoardWidht = board.gameBoard.width
        this.BoardHeight = board.gameBoard.height
        this.enemyWidht = 10
        this.enemyHeight = 10
        this.speed = 2
        this.hp = 3
        this.dmg = 2
        this.DmgCd = 5
        this.Cd = 0
        //spawn
        const side = Math.floor(Math.random() * 4)
        if(side == 0){
            this.x = Math.random() * this.BoardWidht
            this.y = 0
        }
        if(side == 1){
            this.x = Math.random() * this.BoardWidht
            this.y = this.BoardHeight
        }
        if(side == 2){
            this.y = Math.random() * this.BoardHeight
            this.x = 0
        }
        if(side == 3){
            this.y = Math.random() * this.BoardHeight
            this.x = this.BoardWidht
        }
    }

    CreateEnemy(ctx){
        ctx.fillStyle = "red"
        ctx.fillRect(this.x,this.y,this.enemyWidht,this.enemyHeight)
    }


    update(player){
        const dx = player.x - this.x
        const dy = player.y - this.y

        const dist = Math.sqrt(dx*dx + dy*dy)

        this.x += (dx/dist) * this.speed
        this.y += (dy/dist) * this.speed

        if(dist < 5){
            if(this.Cd>=this.DmgCd)

                player.hp -= this.dmg
                this.Cd = 0
        }
        this.Cd++
    }

    levelUp(){
        this.hp +=2
        this.dmg += 2
    }
}