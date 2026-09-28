const element = document.getElementById("rojo");
element.innerHTML = "Adiós";

const parragraph = document.getElementById("text");
parragraph.style.color = "orange";

const clickHeader = document.getElementById("click");
clickHeader.addEventListener('click', () => {
    clickHeader.style.color = "brown";
})

const lista = document.getElementById("lista");
const bouton = document.getElementById('button');

bouton.addEventListener('click', () => {
    lista.style.color = "aqua";
})