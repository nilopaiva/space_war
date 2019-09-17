class AmmunitionBar{
    backgroundColor = "#474747";
    barColor = "#1d1bcc";
    barMaxWidth = variables.getAmmunitionBarWidth();

    constructor(){
        game.fillStyle = this.barColor;
        game.fillRect(10,25,this.barMaxWidth,10);
    }

    update(){
        game.fillStyle = this.barColor;
        game.fillRect(10,25,this.barMaxWidth,10);
        this.resizeBarWidth();
    }

    resizeBarWidth(){
        this.barMaxWidth = 0.125 * variables.width() * player.ammunitionBar / 100;
    }
}

let ammunitionBar = new AmmunitionBar();