'use strict'
let aleatorios= [
        {nombre: "Estefanie",
        muerto: false},
        
        {nombre: "Vanesa",
        muerto: false},
        
        {nombre: "Sergio",
        muerto: false},
        
        {nombre: "Jorge",
        muerto: false},

        {nombre: "Jose M",
        muerto: false},
        
        {nombre: "Lorena",
        muerto: false}, 
        
        {nombre: "Quim",
        muerto: false},
        
        {nombre: "Carmen",
        muerto: false},
        
        {nombre: "Laura 2",
        muerto: false},
        
        {nombre: "Rene",
        muerto: false},
        
        {nombre: "Laura1",
        muerto: false},
        
        {nombre: "Gisa",
        muerto: false},
        
        {nombre: "Alvaro",
        muerto: false},
        
        {nombre: "Moi",
        muerto: false},
        
        {nombre: "El señor X",
        muerto: false},
        
        {nombre: "La señora X",
        muerto: false},
        
        {nombre: "Loredana",
        muerto: false},
        
        {nombre: "Joan",
        muerto: false},
        
        {nombre: "Olga",
        muerto: false},
        
        {nombre: "Giacomo",
        muerto: false},
        
        {nombre: "Isma",
        muerto: false},
        
        {nombre: "El Chiri",
        muerto: false},
        
        {nombre: "Alejandra",
        muerto: false},
        
        {nombre: "Jackson",
        muerto: false},
      ];


// UNIONES HTML
let botonSacrificio= document.querySelector("#boton");
let nombreSacrificio= document.querySelector("#resultado");


//EVENTOS

botonSacrificio.addEventListener("click", muertis);



//FUNCIONES

function muertis() {
  let sacrificados= [];
  let sacrificio = aleatorios[Math.round(Math.random()*(aleatorios.length-1))];
  
  for(let i= 0; i < aleatorios.length; i++) {
    if(sacrificio != sacrificados[i]){
    sacrificados.push(sacrificio)
    sacrificio.muerto= true;
    nombreSacrificio.innerHTML = sacrificio.nombre;
    }

    return muertis();
  }}


/*
function agregarSacrificio(){


}

function quitarSacrificio() {


}




function 
agregarParticipante(){​​​​​


let nuevoParticipante
= document.querySelector("#nombreNuevoParticipante").value;

if(nuevoParticipante !=""){​​​​​

generarItemListaParticapantes(nuevoParticipante);

//vacía la caja cuando pulsamos el botón

document.querySelector("#nombreNuevoParticipante").value
= "";


}​​​​​


else{​​​​​


alert("Introduce algún nombre!");


}​​​​​


//actualiza el array de botones para que los nuevos tengan funcionalidad


prepararBotonesEliminar();


generarDisplayParticipantes();


}​​​​​*/
