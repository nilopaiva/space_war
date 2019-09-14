class AmmunitionBar{
    backgroundColor = "#474747";
    barColor = "#1d1bcc";
    barMaxWidth = 0.125 * variables.width();

    constructor(){
        game.fillStyle = this.barColor;
        game.fillRect(10,25,this.barMaxWidth,10);
    }

    update(){
        game.fillStyle = this.barColor;
        game.fillRect(10,25,this.barMaxWidth,10);
        this.resizeBarMaxWidth();
    }

    resizeBarMaxWidth(){
        this.barMaxWidth = 0.125 * variables.width();
    }
}

let ammunitionBar = new AmmunitionBar();