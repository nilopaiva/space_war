class Update{
    update(){
        game.clearRect(0,0,variables.width(),variables.height());
        player.update();
        lifeBar.update();
        ammunitionBar.update();
        enemies.forEach(enemy => {
            if(enemy.alive){
                enemy.update();
                enemy.checkCollision(player.shots); 
            }
        });
        requestAnimationFrame(()=>this.update());
    }
}

let up = new Update();
window.requestAnimationFrame(()=>up.update());