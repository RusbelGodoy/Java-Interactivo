function encender(){
    var bombilla = document.getElementById ('foco');
    bombilla.src ='img/pic_bulbon.gif';
}

function apagar(){
    var bombilla = document.getElementById ('foco');
    bombilla.src ='img/pic_bulboff.gif';
}

function ocultar(){
    var bombilla = document.getElementById ('foco');
    bombilla.style.display='none';
}
function mostrar(){
    var bombilla = document.getElementById ('foco');
    bombilla.style.display='block';
}

function cambiarFondo(){
    var fondo = document.getElementById('fondo');
    var R = Math.random()*(0,255)-0;
    var G = Math.random()*(0,255)-0;
    var B = Math.random()*(0,255)-0;
    fondo.style.background='rgb('+R+' '+G+' '+B+')';
}

function FondoBlanco(){
    var fondo = document.getElementById('fondo');
    fondo.style.background='rgb(255 255 255)';
}

function Choisecolor(){
    var fondo = document.getElementById('fondo');
    Color = prompt('escriba el color que desea en ingles')
    fondo.style.background=Color;
}

function opacidad(){
    var bombilla = document.getElementById ('foco');
    var opacidad = document.getElementById('opacity').value;
    bombilla.style.opacity=opacidad+'%';
}

function CambioT(){
    var bombilla = document.getElementById ('foco');
    var tamaño = document.getElementById('tamañoimagen').value;
    bombilla.style.width=tamaño+'%';
}
