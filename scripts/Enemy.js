/**
 * Classe Inimigo
 * Define como se move a nave, a velocidade, hp e etc.
 */
class Enemy{

    position_x = variables.width()+Math.round(Math.random()*60 + 24);
    position_y = (Math.round(Math.random()*60 + 24) * variables.height()) / 100;
    speed      = variables.getEnemySpeed();
    shots      = [];
    color      = "#620dbd";
    alive      = true;

    constructor(){
        game.fillRect(this.position_x, this.position_y-variables.unityHeight()*2, variables.unityWidth(), variables.unityHeight()*4);

        game.fillRect(
            variables.unityWidth()-2 + this.position_x,
            variables.unityHeight()+1 + this.position_y,
            variables.unityWidth(),
            variables.unityHeight()*1.5);
    }

    /**
     * Define como o jogador pode controlar a nave.
     */
    control(){

    }

    /**
     * Calcula a posição da nave, chamado a cada frame
     */
    moving(){
        this.position_x -= this.speed;
    }

    /**
     * É chamado toda vez que o moving é chamado (a cada frame)
     */
    update(){
        this.moving();
        // Atualiza posição do tiro
        if(this.shots.length > 0){
            this.shots.forEach(shot => {
                shot.update();
            });
        }

        // Atualiza posição da nave

        //cor da nave
        game.fillStyle = this.color;

        // Quadrado base da nave 
        game.fillRect(
            this.position_x,
            this.position_y-variables.unityHeight()*2,
            variables.unityWidth(),
            variables.unityHeight()*4);
        
        // Quadrado onde sai o tiro    
        game.fillRect(
            variables.unityWidth() + this.position_x-variables.unityWidth()*1.9,

            variables.unityHeight() + variables.unityHeight()/4 + this.position_y-variables.unityHeight()*2,

            variables.unityWidth(),

            variables.unityHeight()*1.5);   
    }

    /**
     * Checa se algo colidiu com o inimigo
     */
    checkCollision(object){
        object.forEach(shot => {
            // Verifica se houve colisão no eixo X
            if(shot.position_x <= this.position_x && shot.position_x >= this.position_x - variables.unityWidth()){
                // Verifica se houve colisão no eixo Y
                if(shot.position_y + shot.height >= this.position_y - variables.unityHeight()*2 &&
                   shot.position_y <= this.position_y + variables.unityHeight()*2){
                    this.color = "#FFF";
                    this.destroy(shot);
                }
            } 
        });
    }

    /**
     * Destroi o tiro que o atingiu e a sí mesmo
     */
    destroy(shot){
        shot.destroy();
        this.position_x = -2000;
        this.alive = false;
    }
}

let enemies = [];
enemies.push(new Enemy());
enemies.push(new Enemy());