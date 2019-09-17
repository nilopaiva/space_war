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
                    player.checkCollision(enemy);
                }
            });
            player.shots.forEach(shot => {
                if(shot.position_x >= variables.width()){
                    shot.destroy();
                }
            })
            if(player.alive)
            requestAnimationFrame(()=>this.update());
    }
}

let up = new Update();
window.requestAnimationFrame(()=>up.update());