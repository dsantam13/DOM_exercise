/*
console.log(document);
document.querySelector('h1').textContent = 'Hablemos de JavaScript';
const title = document.querySelector('h1');
title.innerHTML = 'New and <span class="accent">improved</span> title';

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");
const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
    .join("");
  
// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup;
*/

let padre = document.getElementById('padre');
let resultado = document.getElementById('resultado');

//resultado.innerText = padre.nodeName;

let hijos = padre.children;
resultado.innerText = hijos.length