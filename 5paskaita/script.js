console.log ("5 paskaita DOM Manipuliavimas");

const nameNode = document.getElementById("name");
nameNode.textContent = "Laura";

const descriptionNode = document.getElementById("description");
descriptionNode.textContent = "Man patinka programuoti";

document.body.style.backgroundColor = "#f1f1f1";
document.body.style.margin = 0;
nameNode.style.paddingLeft = "10px";
nameNode.style.color = "blue";
descriptionNode.style.padding = "10px";
descriptionNode.style.backgroundColor = "cyan";

// const liByTag = document.querySelector("li");

// const liById = document.querySelector("#discount");

// const liByClass = document.querySelector(".cheese");

// const firstItem = document.querySelector("li:first-child");
// console.log(firstItem);
//tas pats darosi su last-child

// const discounstedItems = document.querySelectorAll("#discount");
// console.log(discounstedItems[1]);
//jei nori kad rodytu itemus skaciuojasi nuo 0.
//su queryselector id rasosi su #, o su getelementbyid tiesiog id pavadinimas.

