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


}