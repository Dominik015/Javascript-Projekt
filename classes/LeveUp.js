export class LevelUp{
    constructor(){
        this.card = [
            {
                name: "HP",
                effect: this.AddHp
            },
            {
                name: "Speed",
                effect: this.AddMs
            },
            {
                name: "Damage",
                effect: this.AddDmg
            }
        ]
    }

    AddHp(player){
        player.hp +=20
    }
    AddMs(player){
        player.speed += 1
    }
    AddDmg(player){
        player.dmg += 1
    }

    GetRandomCards(){
        const shuffled = this.card.slice()
        for(let i = shuffled.length-1; i>0;i--){
            const j = Math.floor(Math.random() * (i+1))

            const temp = shuffled[i]
            shuffled[i] = shuffled[j]
            shuffled[j] = temp
        }

        return shuffled.slice(0,3)
    }
}