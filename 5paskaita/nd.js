// document.body.innerHTML = "<h2>Neringa</h2>";

// const myName = document.getElementById("name");
// myName.textContent = "Neringa";
// console.log(myName);

// const products = document.getElementById("cheese");
// products.textContent = "Sūris";
// console.log(products);

// const blueText = document.querySelector(".bluetext > span");
// blueText.textContent = "blue";

// const firstListItem = document.querySelector("li:first-child");
// const secondListItem = document.querySelector("li:nth-child(2)");

// const bmw_group = firstListItem;
// const vw_group = secondListItem;

// firstListItem.textContent = "vw_group";
// secondListItem.textContent = "bmw_group";

const imageSrc = "https://crocoder.dev/images/crocoder-logo.png";
const divElement = document.querySelector("div");
const imgElement = document.createElement("img");
imgElement.src = imageSrc;
divElement.appendChild(imgElement);