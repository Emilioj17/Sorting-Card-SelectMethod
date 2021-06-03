/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let botonDraw = document.querySelector("#draw");
let botonSort = document.querySelector("#sort");
var retornoCentro = [];
var retornoFigura = [];
botonDraw.addEventListener("click", cardGenerator);
botonSort.addEventListener("click", sortCards);

// Funcion Que Genera Numeros Aleatorios de las Cartas
function cardGenerator() {
  //Variables
  retornoCentro = [];
  retornoFigura = [];
  let centro = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let figura = ["♥", "♠", "♦", "♣"];
  let valorInput = document.querySelector("#input").value; // toma valor del input

  //Genera la Aleatoriedad
  for (let x = 0; x < valorInput; x++) {
    let centroIndex = Math.floor(Math.random() * centro.length);
    let figuraIndex = Math.floor(Math.random() * figura.length);
    retornoCentro.push(centro[centroIndex]);
    retornoFigura.push(figura[figuraIndex]);
  }
  cartasToScreen(retornoCentro, retornoFigura, "democlass", 2);
  return retornoCentro, retornoFigura;
}

//Funcion que Dibuja las Cartas
function cartasToScreen(numero, figura, posicion, condicional) {
  let listaCartas = document.querySelector(`.${posicion}`);
  if (condicional == 2) {
    listaCartas.innerHTML = "";
  } else {
    console.log("");
  }
  for (let x = 0; x < numero.length; x++) {
    // Crear div
    let newDivDemoClass = document.createElement("div");
    let subDivFiguraIzquierda = document.createElement("div");
    let subDivFiguraDerecha = document.createElement("div");
    let subDivNumero = document.createElement("div");
    //
    let textForFiguraIzquierda = document.createTextNode(`${figura[x]}`);
    let textForFiguraDerecha = document.createTextNode(`${figura[x]}`);
    let textForNumero = document.createTextNode(`${numero[x]}`);
    let att = document.createAttribute("class");
    let attFiguraIzquierda = document.createAttribute("class");
    let attNumero = document.createAttribute("class");
    let attFiguraDerecha = document.createAttribute("class");
    att.value = `${posicion}`;
    attFiguraIzquierda.value = "izquierda";
    attNumero.value = "numero";
    attFiguraDerecha.value = "derecha";
    // Agregando text a SubDiv
    subDivFiguraIzquierda.appendChild(textForFiguraIzquierda);
    subDivFiguraDerecha.appendChild(textForFiguraDerecha);
    subDivNumero.appendChild(textForNumero);
    if (figura[x] == "♠" || figura[x] == "♣") {
      console.log("Hola");
      console.log(subDivFiguraDerecha);
      subDivFiguraDerecha.style = "color:black";
      subDivFiguraIzquierda.style = "color:black";
      subDivNumero.style = "color:black";
    }
    //
    listaCartas.appendChild(newDivDemoClass);
    newDivDemoClass.appendChild(subDivFiguraIzquierda);
    newDivDemoClass.appendChild(subDivNumero);
    newDivDemoClass.appendChild(subDivFiguraDerecha);
    listaCartas.setAttributeNode(att);
    //listaCartas.classList.add("row");
    //Agregar div todos
    subDivFiguraIzquierda.setAttributeNode(attFiguraIzquierda);
    subDivNumero.setAttributeNode(attNumero);
    subDivFiguraDerecha.setAttributeNode(attFiguraDerecha);
  }

  prueba.style = `grid-template-columns: repeat(${numero.length}, auto)`;
}

function sortCards() {
  let bubbleSort = inputArr => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (inputArr[j] > inputArr[j + 1]) {
          let tmp = inputArr[j];
          inputArr[j] = inputArr[j + 1];
          inputArr[j + 1] = tmp;
        }
        cartasToScreen(retornoCentro, retornoFigura, "bubbleLog", 1);
      }
    }
    return inputArr;
  };
  bubbleSort(retornoCentro);
}
