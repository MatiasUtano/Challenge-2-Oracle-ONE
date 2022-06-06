let palabras = ["ORACLE","FULLSTACK","TECNOLOGIA","ALURA","PROGRAMACION","BACKEND","FRONTEND","MOBILE","TRABAJO","ESTUDIANTE","HOMEOFFICE"];
let palabraOculta = "";
let adivinandoPalabra = "";
const letraUsada = document.getElementById("letrasUsadas");
let vidas = 6;
document.getElementById("boton").addEventListener("click",comprobar);

start();

function start() {
    palabraOculta = palabras[Math.floor(Math.random()*palabras.length)];
    for(let i = 0; i < palabraOculta.length; i++) {
        adivinandoPalabra = adivinandoPalabra + "_ ";

    }
    document.getElementById("frase").innerHTML = adivinandoPalabra;
}

function comprobar(){
    let letra = document.getElementById("letra").value.toUpperCase();
    let comprobar = "";
    for(let i=0 ; i < palabraOculta.length; i++){
        if(letra == palabraOculta[i]){
            comprobar = comprobar + letra + " ";
        }else{
            comprobar = comprobar + adivinandoPalabra[i*2] + " ";
        }
        if(comprobar == adivinandoPalabra){
            vidas--;
            document.getElementById("vidas").innerHTML= "El Numero de Vidas es " + vidas;
        }
        if(comprobar !== palabraOculta){
            usada = document.getElementById("letrasUsadas").innerHTML = letra;
        }
    }
    adivinandoPalabra = comprobar;
    document.getElementById("frase").innerHTML = adivinandoPalabra;
    if(vidas == 0){
        document.querySelector("#perdedor").style.display="flex";
    }
    if(adivinandoPalabra.search("_") == -1){
        document.querySelector("#ganador").style.display="flex";
    }
    document.getElementById("letra").value="";
    document.getElementById("letra").focus();
    dibujar();
}

function dibujar(){
    let canvas = document.getElementById("lienzo");
    if(canvas.getContext){
        let ctx = canvas.getContext("2d");
        //Esto dibuja la base del ahorcado
        ctx.beginPath();
        ctx.moveTo(30,200);
        ctx.lineTo(30,10);
        ctx.lineTo(150,10);
        ctx.lineTo(150,20);
        ctx.stroke();
        if(vidas <= 5){
        ctx.beginPath();
        ctx.arc(150, 40, 20, 0, Math.PI * 2);
        ctx.stroke();
        }
        if(vidas <= 4){
        ctx.beginPath();
        ctx.moveTo(150,60);
        ctx.lineTo(150,100);
        ctx.stroke();
        }
        if(vidas <= 3){
        ctx.beginPath();
        ctx.moveTo(150,60);
        ctx.lineTo(130,100);
        ctx.stroke();
        }
        if(vidas <= 2){
        ctx.beginPath();
        ctx.moveTo(150,60);
        ctx.lineTo(170,100);
        ctx.stroke();
        }
        if(vidas <= 1){
        ctx.beginPath();
        ctx.moveTo(150,100);
        ctx.lineTo(170,130);
        ctx.stroke();
        }
        if(vidas == 0){
        ctx.beginPath();
        ctx.moveTo(150,100);
        ctx.lineTo(130,130);
        ctx.stroke();
        }
    }
}