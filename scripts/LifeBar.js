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
        this.resizeBarMaxWidth();
    }

    resizeBarMaxWidth(){
        this.barMaxWidth = 0.25 * variables.width();
    }
}

let lifeBar = new LifeBar();