// pasikartoti masyvo struktūra (laužtiniai skliaustai [, , ,...])
// išmokti sukurti elementą Javascript faile
// susipažinti su append/prepend metodais ir juos panaudoti
//

// const array = ["Neringa", "Tomas", "Lukas"];
// const numbers = [1, 2, 3 ,4];
// const users = [
//     {name: "rokas", age: 20},
//     {name: "lukas", age: 18},
// ];

// const lists = [
//     [1, 2, 3],
//     [2, 5, 6],
//     [4, 5, 6],
// 

// const divs = [<div>Rokas</div>, <div>Tomas</div>];
// ten virsuj masyvu pvz

// const fruits = document.getElementsByTagName("li");

// const fruit2 = document.querySelectorAll("#fruit");

//NAUJO ELEMENTO SUKŪRIMAS Į HTML

// const newFruit = document.createElement("li");
// newFruit.textContent = "pineapple";
// // <li>pineapple</li>
// //append - jis ikelia is js i html itema i elementa paskutine vieta
// //prepend - imeta i elemento pradzia

// const fruitList = document.getElementById("fruit-list");
// // fruitList.append(newFruit);

// const pear = document.createElement("li");
// pear.textContent = "pear";
// pear.style.color = "green";

// // fruitList.prepend(pear); // i listo pradzia imete

// const extraList = document.createElement("ol");

// extraList.append(newFruit);
// extraList.append(pear);
// //arba extraList.append(newFruit, pear);
// document.body.append(extraList);

//AUTOMOBILIO APRAŠYMAS

const card = document.createElement("div");
card.style.background = "#f3f3f3";
card.style.display = "flex";

const image = document.createElement("img");
image.src = "https://s1.15min.lt/images/photos/2020/08/19/original/ferrari-f8-tributo-5f3d402aef4f7.jpg"
image.alt = "red ferrari";
image.style.width = "40%";

const info = document.createElement("div");
info.style.paddingLeft = "24px";

const title = document.createElement("h1");
title.textContent = "Ferrari f8 tributo";

const description = document.createElement("p");
description.textContent = "Very nice car";

const benefits = document.createElement("ul");

const firstBenefit = document.createElement("li");
firstBenefit.textContent = "color";
const secondBenefit = document.createElement("li");
secondBenefit.textContent = "price";
const thirdBenefit = document.createElement("li");
thirdBenefit.textContent = "speed";

// const benefitList = ["color", "price", "speed"];

// for (let i = 0, i < benefitList.length; i++) {
//     const benefitDescription = array[i];
//     const benefit = document.createElement("li");
//     benefit.textContent = benefitDescription;
//     benefits.append(benefit);
// }
// sutrumpinai jei nerasyt kiekvieno atskirai

benefits.append(firstBenefit,secondBenefit,thirdBenefit);
info.append(title,description, benefits);
card.append(image,info);
document.body.append(card);

