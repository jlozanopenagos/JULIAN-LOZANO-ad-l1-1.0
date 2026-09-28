const element = document.getElementById("rojo");
element.innerHTML = "Adiós";

const parragraph = document.getElementById("text");
parragraph.style.color = "orange";

let headerColorChanged = false; 
const clickHeader = document.getElementById("click");
clickHeader.addEventListener('click', () => {
    if(headerColorChanged){
        clickHeader.style.color = "brown";
        headerColorChanged = false;
    } else {
        clickHeader.style.color = "black";
        headerColorChanged = true;
    }
})

const lista = document.getElementById("lista");
const bouton = document.getElementById('button');

let listColorchanged = false;

bouton.addEventListener('click', () => {
    if (listColorchanged) {
        lista.style.color = "black";
        listColorchanged = false;
    } else {
        lista.style.color = "aqua";
        listColorchanged = true;
    }
})