// const userName = "Neringa";
// const goodBye = `Viso gero ${userName}, lauksime sugrįžtant!`;
// console.log(goodBye);

// const salary = 2000;
// console.log(`$${salary}`);

// const price = 10;
// if(price > 10) {
//     console.log("Perku");
//     //arba result = "perku"
// } else {
//     console.log("neperku");
//     //result = "neperku"
// }
// //console.log(result);

// const hours = 30;

// let result = "";

// if (hours >= 0 && hours < 6) {
//   result = "Naktis";
// } else if (hours >= 6 && hours < 12) {
//   result = "rytas";
// } else if (hours >= 12 && hours < 18) {
//   result = "diena";
// } else if (hours >= 18 && hours <= 24) {
//   result = "vakaras";
// } else {
//   result = "netinkamas skaicius";
// }
// console.log(result);

// const price = 10;
// const result = price > 10 ? "Perku" : "Neperku";

// const hours = 12;

// const dayTime =
//   hours >= 0 && hours < 6
//     ? "Naktis"
//     : hours >= 6 && hours < 12
//     ? "rytas"
//     : hours >= 12 && hours < 18
//     ? "Diena"
//     : hours >= 18 && hours <= 24
//     ? "vakaras"
//     : "blogas skaičius";
// console.log(dayTime);
// //ternary operatorius

// const myName = "Neringa";
// const nameLength = myName.length;
// const firstChar = myName[0];
// const lastChar = myName[myName.length -1];

// for (let i = 0; i < nameLength; i++) {
//     const char = myName[i];
//     console.log(char);
// }

// for(let i = 0; i < myName.length; i++) {
//     const char = myName[i];
//     console.log(`${i+1}, ${char}`)
// }

// //f-jos
// const abc = 1;
// //tam, kad butu galima kazka consolint, kintamieji turi buti viduje
// // t.y. scope
// function showTime() {
//     const def = 2;
//     console.log(def);
//     console.log(abc);
// }

// // turi return
// function square(num) {
//   // 5 * 5
//   return num * num;
// }
// const squared = square(5);
// console.log(squared);
// console.log(square(5));
// //du budai kaip returnint rezultata

// neturi return

// function cube(number) {
//   return number * number * number;
// }
// const cubeCalculated = cube(3);
// console.log(cubeCalculated);

// function multiply(num1, num2) {
//   return num1 * num2;
// }
// const multiplyCalculated = multiply(2, 5);
// console.log(multiplyCalculated);

// function sum(num1, num2) {
//   return num1 + num2;
// }
// const sumCalculated = sum(15, 2);
// console.log(sumCalculated);

// function substract(num1, num2) {
//   return num1 - num2;
// }
// const substractionCalculated = substract(25, 15);
// console.log(substractionCalculated);

// function divide(num1, num2) {
//   return num1 / num2;
// }
// const devisionCalculated = divide(18, 3);
// console.log(devisionCalculated);

// function calculateChars(string) {
//   return string.length;
// }
// const calculatedChars = calculateChars("Neringa");
// console.log(calculatedChars);

// function comparison(num1, num2) {
//   if (num1 > num2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const compared = comparison(10, 8);
// console.log(compared);

// function firstAndLastChar(string) {
//   return string[0] + string[string.length - 1];
// }
// console.log(firstAndLastChar("Neringa"));

//F-JA KURI NETURI RETURN

// function showMessage(message) {
//   console.log(message);
// }
// //neturi reiksmes

//DOM data object model prasideda nuo cia

// document.getElementById("id"); // vienaskaita grazina {} elementa
// document.getElementsByClassName("klase"); // daugiskaita grazina [] masyva
// document.getElementsByName("name"); // daugiskaita grazina []
// document.getElementsByTagName("div"); // daugiskaita grazina []

// document.getElementById("pirmas"); // p
// const items = document.getElementsByClassName("item"); // [p , p]
// // items[0] pirmas itemas;
// // items[items.length - 1] paskutinis itemas;
// document.getElementsByName("mano-input"); // []
// document.getElementsByTagName("p");

// document.querySelector("div"); // vienaskaita grazina pagal elementa {}
// document.querySelector(".card"); // vienaskaita grazina pagal klase {}
// document.querySelector("#price"); // vienaskaita grazina pagal id {}
// document.querySelector(".card div"); // vienaskaita
// const allParagraphs = document.querySelectorAll("p"); // daugiskaita []

// const first = allParagraphs[0];
// const last = allParagraphs[allParagraphs.length - 1];

// first.style.background = "red";

// const help = document.getElementById("help");

// help.textContent = "Rokas yra geras zmogus";
// help.style.background = "red";

// const body = document.querySelector("body");
// body.style.backgroundColor = "#4267B2";

// document.body.style.background = "#4267B2";

// const nameEl = document.getElementById("name");
// nameEl.textContent = "Neringa";
// nameEl.style.color = "green";

// const greetingEl = document.getElementById("greeting");
// greetingEl.textContent = "Labadiena, geros dienos!";
// greetingEl.style.textAlign = "center";

// greetingEl.style.display = "flex";
// greetingEl.style.justifyContent = "center";
// greetingEl.style.alignItems = "center";
// greetingEl.style.height = "80vh";

// const div = document.createElement("div");
// document.body.append(div);

// const container = document.createElement("div");
// const p = document.createElement("p");
// const img = document.createElement("img");
// img.src = "adresas";
// img.alt = "pav pavadinimas";
// container.append(p, img); //pirmas prisides tas kuris nurodytas pirmas

// document.querySelector("#id").append(container);
// // append naudojamas kai pridedama i gala kodo
// // prepend kai i prieki pridedamas elementas
// const blackCube = document.createElement("div");
// blackCube.style.backgroundColor = "black";
// blackCube.style.width = "100px";
// blackCube.style.height = "100px";
// document.body.append(blackCube);

// const cardOne = document.createElement("div");
// const cardTwo = document.createElement("div");
// const cardThree = document.createElement("div");

// cardOne.style.backgroudColor = "yellow";
// cardOne.style.height = "50px";
// cardOne.style.width = "50px";

// cardTwo.style.backgroudColor = "green";
// cardTwo.style.height = "100px";
// cardTwo.style.width = "100px";

// cardThree.style.backgroudColor = "red";
// cardThree.style.height = "150px";
// cardThree.style.width = "150px";

// document.body.prepend(cardOne, cardTwo, cardThree);

// const fruits = ["banana", "apple", "pear"];

// const list = document.createElement("ul");

// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   const listItem = document.createElement("li");
//   listItem.textContent = fruit;
//   list.append(listItem);
// }

// document.body.append(list);

// const myButton = document.getElementById("my-button");

// let count = 0;

// myButton.addEventListener("click", (event) => {
//   count++;
//   const countEl = document.getElementById("count");
//   countEl.textContent = count;
//   console.log(`button pressed ${count} times`);
//   if (count === 5) {
//     alert("you've just clicked 5 times");
//   }
// });

// constmyButton = document.getElementById("my-button");
// letcount = 0;
// myButton.addEventListener("click", (event) => {​
// count++;
// constcountEl = document.getElementById("count");
// countEl.textContent = count;
// console.log(`Button pressed: ${​count}​ times`);
// constresultEl = document.getElementById("result");
// if (count === 5) {​
// resultEl.textContent = "You just hit button five times";
// }​ else {​
// resultEl.textContent = "";
// }​}​);
// functionhandleClick (event){​
// count++;
// constcountEl = document.getElementById("count");
// countEl.textContent = count;
// console.log(`Button pressed: ${​count}​ times`);
// constresultEl = document.getElementById("result");
// if (count === 5) {​
// resultEl.textContent = "You just hit button five times";
// }​ else {​
// resultEl.textContent = "";
// }​
// };​
// myButton.addEventListener("click", handleClick);

// const showNameButton = document.querySelector("#show-name");

// showNameButton.addEventListener("click", () => {
//   const nameEl = document.querySelector("#name");
//   nameEl.textContent = "Rokas";
//   nameEl.style.color = "red";
// });

// let numberCount = 0;

// const plusButton = document.getElementById("plus");
// plusButton.addEventListener("click", () => {
// numberCount++;
// document.getElementById("result-number").textContent = numberCount;
// });

// const minusButton = document.getElementById("minus");
// minusButton.addEventListener("click", () => {
// numberCount--;
// document.getElementById("result-number").textContent = numberCount;
// });

// let number500Count = 0;

// const plus500button = document.getElementById("plus500");
// plus500button.addEventListener("click", () => {
// number500Count += 500;
// document.getElementById("result500-number").textContent = number500Count;
// });

// const minus500button = document.getElementById("minus500");
// minus500button.addEventListener("click", () => {
// number500Count -= 500;
// document.getElementById("result500-number").textContent = number500Count;
// });

// const resetButton = document.getElementById("reset500");
// resetButton.addEventListener("click", () => {
// number500Count = 0;
// document.getElementById("result500-number").textContent = number500Count;
// });

// let number500Count = 0;

// const plus500button = document.getElementById("plus500");
// plus500button.addEventListener("click", () => renderResultNumber("+"));

// const minus500button = document.getElementById("minus500");
// minus500button.addEventListener("click", () => renderResultNumber("-"));

// const resetButton = document.getElementById("reset500");
// resetButton.addEventListener("click", () => renderResultNumber());

// function renderResultNumber(action) {
//   if (action === "+") {
//     number500Count += 500;
//   } else if (action === "-") {
//     number500Count -= 500;
//   } else {
//     number500Count = 0;
//   }
//   document.getElementById("result500-number").textContent = number500Count;
// }

// const registerForm = document.getElementById("register");

// registerForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const username = document.querySelector("input[name='username']");
//   const email = document.querySelector("input[name='email']");
//   const age = document.querySelector("input[name='age']");
//   const password = document.querySelector("input[name='password']");

//   const result = document.createElement("h2");
//   result.textContent = `${username.value}, ${email.value}, ${age.value}, ${password.value}`;
//   document.body.append(result);
// });

// const registrationForm = document.getElementById("register");

// registrationForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const username = document.querySelector("input[name='username']");
//   const surname = document.querySelector("input[name='surname']");
//   const age = document.querySelector("input[name='age']");

//   const resultAge = document.createElement("h2");

//   if (age.value < 18) {
//     resultAge.textContent = `${username.value} ${surname.value} is child`;
//   } else {
//     resultAge.textContent = `${username.value} ${surname.value} is adult`;
//   }

//   document.body.append(resultAge);
// });

//ARRAYS-MASYVAI
//"NERINGA" => ["N", "E","R","I","N","G","A"]
// array.lenght - ilgis
// first item - [0]
// last item - [array.lenght -1]

// array.forEach(callback)
// callback - (item, index) => {}
// // callback tai yra f-ja kuri yra grazinama ir naudojama tik prie masyvu
// const names = ["rokas", "tomas", "giedrius", "martyna"];
// function addNewStudent(studentName) {
//   names.push(studentName);
// }
// addNewStudent("antanas");

// //array.push() - istumia i gala
// //array.pop() - ismeta is galo
// //array.unshift() - istumia i prieki
// //array.shift() - ismeta is priekio

// //palikti tik green ir yellow

const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];
// function removeColors(colorArray) {
//   colorArray.pop(); // red blue green white black yellow
//   colorArray.shift(); // blue green white black yellow
//   colorArray.shift(); // green white black yellow
//   colorArray.shift(); // white black yellow
//   colorArray.shift(); // black yellow
//   colorArray.shift(); // yellow
//   colorArray.unshift("green"); // green yellow
// }

// removeColors(colors);

// console.log(colors);

// function backToStartingArray() {
//   colors.push("purple"); // green yellow purple
//   colors.shift(); // yellow purple
//   colors.unshift("red", "blue", "green", "white", "black"); // red blue green white yellow purple
// }

// backToStartingArray();

// console.log(colors);

// function reverseArray(array) {
//   array.reverse();
// }
// reverseArray(colors);

// console.log(colors);

// colors.forEach((color) => {
//   console.log(color);
// });

// // colors.forEach(showColor);

// // function showColor(color) {
// // console.log(color);
// // }

// function doubleArrayItem(array) {
//   return array.map((item) => item + item);
// }

// const doubledItems = doubleArrayItem(colors);
// console.log(doubledItems);

function removeGreenAndWhite(colors) {
  const sliced = colors.slice(0, 2);
  const sliced2 = colors.slice(-3);
  const combine = sliced.concat(sliced2); // sujungia du masyvus
  return combine;
}
const removedGreenAndWhite = removeGreenAndWhite(colors);
console.log(removedGreenAndWhite);

function addOrange(colorArray) {
  colorArray.splice(2, 1, "Orange");
}
addOrange(removedGreenAndWhite);

console.log(removedGreenAndWhite);

const hasEChar = removedGreenAndWhite.filter((color) => color.includes("e"));
console.log(hasEChar);
//red.includes ("e") => true

const shorterThat4Chars = removedGreenAndWhite.filter((color) => color.length < 4);
console.log(shorterThat4Chars);

const hasZChar = removedGreenAndWhite.some((color) => color.includes("z"));
//.some tikrina ar yra nors viena reiksme ir duoda true arba false
console.log(hasZChar);

const hasBrownValue = removedGreenAndWhite.some((color) => color === "brown");
console.log("has brown", hasBrownValue);

const hasAChar = removedGreenAndWhite.filter((color) => color.includes("a"));

const aCharCount = hasAChar.length;

console.log(aCharCount);
