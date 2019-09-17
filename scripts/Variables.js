/**
 * Classe Variáveis
 * Possui todas as variáveis do jogo. Essas variáveis podem mudar com o decorrer do jogo, essa classe define apenas valores iniciais (padrões)
 */
class Variables{
    // Quanto menor esse valor mais rápido a nave vai ao mouse
    smooth_value = 10;

    //Velocidade do tiro
    shotSpeed = window.innerWidth / 100;

    //Proporção do tiro
    shotSize = window.innerWidth / 100;

    //Velocidade do inimigo
    enemySpeed = window.innerWidth / 400;

    ammunitionBarWidth = 0.125 * window.innerWidth;

    //Stress da arma do jogador
    playerGunStress = (0.125 * window.innerWidth) / 3;

    resizeWindow(){
        this.smooth_value = 10;
        this.shotSpeed = window.innerWidth / 100;
        this.shotSize = window.innerWidth / 100;
        this.enemySpeed = window.innerWidth / 400;
        this.width();
        this.height();
    }

    /**
     * Define o nível da "suavidade" com que a nave vai até o mouse.
     * Quanto maior seu valor mais rápido a nave vai até o mouse 
     * @param {*} mouse_position 
     * @param {*} player_position 
     */
    smooth(mouse_position, player_position){
        return Math.abs(mouse_position-player_position) / this.smooth_value;
    }

    /**
     * Retorna o tamanho do tiro
     */
    getShotSize(){
        return this.shotSize;
    }

    /**
     * Retorna a velocidade do tiro
     */
    getShotSpeed(){
        return this.shotSpeed;
    }

    getAmmunitionBarWidth(){
        return this.ammunitionBarWidth;
    }

    getPlayerGunStress(){
        return this.playerGunStress;
    }

    /**
     * Retorna velocidade do inimigo
     */  
    getEnemySpeed(){
        return this.enemySpeed;
    }

    /**
     * Largura do canvas (scene)
     */
    width(){
        return window.innerWidth - 5.2
    }

    /**
     * Altura do canvas (scene)
     */
    height(){
        return window.innerHeight - 5.2
    }

    /**
     * Largura mínima de objtos do jogo
     */
    unityWidth(){
        return window.innerWidth/50;
    }
    
    /**
     * Altura mínima de objetos do jogo
     */
    unityHeight(){
        return window.innerWidth/70;
    }
}

let variables = new Variables();

window.addEventListener('resize', (event)=>{
    variables.resizeWindow();
});