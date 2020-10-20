'use strict'

var aleatorios= ["Estefanie", "Vanesa", "Sergio", "Jorge", "Jose M", "Lorena", "Quim", "Carmen", "Laura 2", "Rene", "Laura1","Gisa", "Alvaro", "Moi", "El señor X", "La señora x", "Loredana", "Joan", "Olga", "Giacomo", "Isma", "El Chiri", "Alejandra", "Jackson",]

var sacrificados= [];

function muertis() {
  
  var sacrificio= aleatorios[Math.round(Math.random()*aleatorios.length-1)]

  for(var i= 0; i < aleatorios.length; i++) {
    
    if(sacrificio != sacrificados[i]){
      
    sacrificados.push(sacrificio);
    return sacrificio;
    }
    else {
      return muertis();
    }}
  }