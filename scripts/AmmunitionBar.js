class AmmunitionBar{
    backgroundColor = "#474747";
    barColor = "#1d1bcc";
    barMaxWidth = 0.125 * variables.width();
    barCurrentWidth = 0;

    constructor(){
        game.fillStyle = this.barColor;
        this.barCurrentWidth = this.barMaxWidth;
        game.fillRect(10,25,this.barCurrentWidth,10);
    }

    decrease(){
        this.barCurrentWidth = 0;
    }

    update(){
        game.fillStyle = this.barColor;
        game.fillRect(10,25,this.barCurrentWidth,10);
        if(this.barCurrentWidth <= this.barMaxWidth)
            this.barCurrentWidth += 1;
    }
}

let ammunitionBar = new AmmunitionBar();