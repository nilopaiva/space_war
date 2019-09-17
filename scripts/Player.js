/**
 * Classe Jogador
 * Define como se move a nave, a velocidade, hp e etc.
 */
class Player{

    position_x = 0;
    position_y = 0;
    mouse_x    = 0;
    mouse_y    = 0;
    shots      = [];
    shoted     = false;
    points     = 0;
    lifeBar    = 100;
    ammunitionBar = 100;
    ammunitionStress = variables.getPlayerGunStress();
    alive = true;
    immunit = false;
    immunitTime = 500;

    constructor(color){
        game.fillStyle = "#F22";
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
        document.addEventListener("mousemove", (e) => {
            this.mouse_x = e.clientX;
            this.mouse_y = e.clientY;
        })

        document.addEventListener("touchmove", (e) => {
            this.mouse_x = e.touches[0].clientX+30; //Ajuste para a nave ficar a frente do dedo
            this.mouse_y = e.touches[0].clientY;
        })

        document.addEventListener("click", (e) => {
            if(e.button == 0){
                this.shotFire();
            }
        })

        document.addEventListener("touchstart", (e) => {
            this.shotFire();
        })
    }

    /**
     * Função chamada quando o jogador atira
     */
    shotFire(){
        if(this.ammunitionBar > 0){
            this.shots.push(new Shot(this.position_x, this.position_y));
            this.shoted = true;
            this.ammunitionBar -= this.ammunitionStress;
        }
    }

    /**
     * Calcula a posição da nave, chamado a cada frame
     */
    moving(){
        if(this.position_x < this.mouse_x){
            this.position_x += variables.smooth(this.mouse_x, this.position_x);
        } 

        if(this.position_y < this.mouse_y){
            this.position_y += variables.smooth(this.mouse_y, this.position_y);
        }  

        if(this.position_x > this.mouse_x){
            this.position_x -= variables.smooth(this.mouse_x, this.position_x);
        }  

        if(this.position_y > this.mouse_y){
            this.position_y -= variables.smooth(this.mouse_y, this.position_y);
        }  
    }

    /**
     * Atualiza posição do player e seus tiros
     */
    update(){
        //Atualiza a posição da nave do jogador
        this.moving(); 
        this.updateAmmunitionBar();
        // Atualiza posição do tiro
        if(this.shots.length > 0){
            this.shots.forEach(shot => {
                shot.update();
            });
        }

        // Atualiza posição da nave
        game.fillStyle = "#F22";
        game.fillRect(this.position_x, this.position_y-variables.unityHeight()*2, variables.unityWidth(), variables.unityHeight()*4);
        game.fillRect(
            variables.unityWidth()-2 + this.position_x,
            variables.unityHeight()+1 + this.position_y-variables.unityHeight()*2,
            variables.unityWidth(),
            variables.unityHeight()*1.5);   
    }

    updateAmmunitionBar(){
        if(this.ammunitionBar < 0.125 * variables.width()){
            this.ammunitionBar+=1;
        }
    }

       /**
     * Checa se algo colidiu com o player
     */
    checkCollision(object){
        // Verifica se houve colisão no eixo X
        if(object.position_x <= this.position_x +variables.unityWidth()*3 && object.position_x >= this.position_x - variables.unityWidth()){
            // Verifica se houve colisão no eixo Y
            if(object.position_y + object.height >= this.position_y &&
                object.position_y <= this.position_y + variables.unityHeight()*3.6){
                this.destroy(object);
            }
        } 
    }

    immunitCout(){
        this.lifeBar-= 10;
        this.immunitTime -= 1;
    }

    destroy(object){
        this.alive = false;
        console.log("morto");
    }

    /**
     * Retorna os tiros do jogador
     */
    shots(){
        return this.shots;
    }
}

let player = new Player();
player.control();