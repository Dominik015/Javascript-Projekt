
const keys = {}
export class Player{
    constructor(x,y,board){
        this.x = x
        this.y = y
        this.speed = 4
        this.PlayerWidht = 20
        this.playerHeight = 20
        this.BoardWidht = board.gameBoard.width
        this.BoardHeight = board.gameBoard.height
        this.hp = 10
        this.xp = 0
        this.xpToLevelUp = 100
        this.level = 0
        this.dmg = 3
        this.isLvlUp = false
        this.lvlUpCards = []
    }

    CreatePlayer(ctx){

        ctx.fillStyle = "blue"
        ctx.fillRect(this.x,this.y,this.PlayerWidht,this.playerHeight)
    }

    update(event){
        let dx = 0
        let dy = 0


        if(this.y>0){
            if(keys["ArrowUp"]){
                dy = -1
            }
        }
        if(this.y<this.BoardHeight-this.playerHeight){
            if(keys["ArrowDown"]){
                dy = 1
        }
        }
        if(this.x<this.BoardWidht-this.PlayerWidht){
            if(keys["ArrowRight"]){
                dx = 1
            }
        }
        if(this.x>0){
            if(keys["ArrowLeft"]){
               dx = -1
            }
        }

        const dist = Math.sqrt(dx*dx+dy*dy)
        if(dist>0){
            this.x += (dx/dist) * this.speed
            this.y += (dy/dist) * this.speed
        }
        
    }

    levelUp(xp){
        this.xp += xp
        if(this.xp >= this.xpToLevelUp){
            this.isLvlUp = true
            this.xp = 0
            this.xpToLevelUp += 50
            this.level += 1
        }
    }

    buttonPressed(event){
        keys[event.key] = true
    }
    buttonReleased(event){
        keys[event.key] = false
    }

    ChooseBuff(event){
        if(this.isLvlUp){
            if(event.key == "1"){
                this.lvlUpCards[0].effect(this)
            }
            else if(event.key == "2"){
                this.lvlUpCards[1].effect(this)
            } else if(event.key == "3"){
                this.lvlUpCards[2].effect(this)
            }
        }
    }

}