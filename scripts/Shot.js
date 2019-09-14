/**
 * Classe Tiro
 * Define como funciona o tiro do jogo
 */
class Shot{

    position_x = 0;
    position_y = 0;
    width      = variables.getShotSize();
    height     = variables.getShotSize();
    speed      = variables.getShotSpeed();

    constructor(position_x, position_y){
        this.position_x = position_x;
        this.position_y = position_y-5;
        game.fillStyle = "#F22";
        game.fillRect(this.position_x, this.position_y, this.width, this.height);
    }

    /**
     * Retorna o valor atual da velocidade do tiro
     */
    getSpeed(){
        return this.speed;
    }

    /**
     * Altera o valor da velocidade do tiro, por exemplo, 
     * se pegar um power up que aumenta a velocidade do tiro, use esse método
     * @param {*} speed 
     */
    setSpeed(speed){
        this.speed = speed;
    }

    /**
     * Atualiza a posição do tiro de acordo com sua velocidade
     */
    update(){
        game.fillStyle = "#F22";
        this.position_x += this.speed;
        game.fillRect(this.position_x, this.position_y, this.width, this.height);       
    }

    /**
     * Destroi a sí mesmo
     */    
    destroy(){
        this.position_x = -2000;
        this.speed = 0;
    }
}