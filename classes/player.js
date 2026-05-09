




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

    }

    CreatePlayer(ctx){

        ctx.fillStyle = "blue"
        ctx.fillRect(this.x,this.y,this.PlayerWidht,this.playerHeight)
    }

    update(event){
        
        if(this.y>0){
            if(keys["ArrowUp"]){
                this.y -= this.speed
            }
        }
        if(this.y<this.BoardHeight-this.playerHeight){
            if(keys["ArrowDown"]){
                this.y += this.speed
        }
        }
        if(this.x<this.BoardWidht-this.PlayerWidht){
            if(keys["ArrowRight"]){
                this.x += this.speed
            }
        }
        if(this.x>0){
            if(keys["ArrowLeft"]){
               this.x -= this.speed
            }
        }
        
    }

    buttonPressed(event){
        keys[event.key] = true
    }
    buttonReleased(event){
        keys[event.key] = false
    }

}