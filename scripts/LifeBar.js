class LifeBar{
    backgroundColor = "#474747";
    barColor = "#0fa334";
    barMaxWidth = 0.25 * variables.width();

    constructor(){
        game.fillStyle = this.barColor;
        game.fillRect(10,10,this.barMaxWidth,10);
    }

    update(){
        game.fillStyle = this.barColor;
        game.fillRect(10,10,this.barMaxWidth,10);
        this.resizeBarWidth();
    }

    resizeBarWidth(){
        this.barMaxWidth = 0.25 * variables.width() * player.lifeBar / 100;
    }
}

let lifeBar = new LifeBar();