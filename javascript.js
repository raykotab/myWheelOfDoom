'use strict'

document.getElementById("sacrificio").onclick = function {sacrificio()};

function sacrificio() {
  document.getElementById("sacrificio").innerHTML = "YOU CLICKED ME!";
}



/*
    OPCION 1

var aleatorios= ["Giselle", "Jackson", "Moi", "Alvaro"];

var sacrificados= [];

var sacrificio;

function muertis() {
  
  var sacrificio= aleatorios[Math.round(Math.random()*aleatorios.length-1)]
  
  if (sacrificados.lenght == 0) {
  sacrificados.push(sacrificio);
  return sacrificio;
  }

  else{
  for (var i in sacrificados) {
  if(sacrificio == i) {
  return muertis();
  }

  else {
  sacrificados.push(sacrificio);
  return sacrificio;}
 }}
 } */


 /* 
 
        OPCION 2
 
var aleatorios= ["Giselle", "Jackson", "Moi", "Alvaro"];

var sacrificados= [];


function muertis() {
  
  var sacrificio= aleatorios[Math.round(Math.random()*aleatorios.length-1)]

  if (sacrificados.lenght == 0) {
  sacrificados.push(sacrificio);
  return sacrificio;
  }

  else{
  for (var i in sacrificados) {
  if(sacrificio == i) {
  return muertis();
  }

  else {
  sacrificados.push(sacrificio);
  return sacrificio;}
 }}
 } /*
