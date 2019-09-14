/**
 * Classe Inicializadora
 * Inicializa o game escolhendo o melhor
 * tamanho da cena (canvas) dependendo do tamanho da tela
 */
class Initialize{
    constructor(){
        let scene = document.querySelector("#scene");
        scene.setAttribute("height", window.innerHeight - 5.2);
        scene.setAttribute("width", window.innerWidth - 5.2);
    }
}

var c = document.getElementById("scene");
var game = c.getContext("2d");

let init = new Initialize();