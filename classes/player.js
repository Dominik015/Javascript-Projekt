



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

    ChangeDirection(event){
        const key = event.key

        if(key == "ArrowUp"){
            this.y -= this.speed
        }else if(key == "ArrowDown"){
            this.y += this.speed
        }else if(key == "ArrowRight"){
            this.x += this.speed
        }else if(key == "ArrowLeft"){
            this.x -= this.speed
        }

    }

}