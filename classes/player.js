


const keys = {}
export class Player{
    constructor(x,y){
        this.x = x
        this.y = y
        this.speed = 7   
    }

    CreatePlayer(ctx){
        ctx.fillStyle = "blue"
        ctx.fillRect(this.x,this.y,20,20)
    }

    update(event){
        

        if(keys["ArrowUp"]){
            this.y -= this.speed
        }if(keys["ArrowDown"]){
            this.y += this.speed
        }if(keys["ArrowRight"]){
            this.x += this.speed
        }if(keys["ArrowLeft"]){
            this.x -= this.speed
        }
        
        

    }
    buttonPressed(event){
        keys[event.key] = true
    }
    buttonReleased(event){
        keys[event.key] = false
    }

}