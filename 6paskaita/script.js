// console.log("6 paskaita masyvai funkcijos ir eventai");

// const myName = "Neringa";
// const firstChar = myName[0];
// const lastChar = myName[myName.length -1];
// const middleChar = myName[Math.floor(myName.length /2)];
// console.log(firstChar);
// console.log(lastChar);
// console.log(middleChar);

// for (let i = 0; i < myName.length; i++);{
//     const char = myName[i];
//     console.log(`${i+1}. ${char}`);
// }
// const firstChar = myName.charAt(0);
// const lastChar = myName.charAt(myNAme.length -1);

// //MASYVAI/ARRAY
// const fruits = ["banana", "apple", "orange"];
// //kiekvienas stringas skaiciuojamas kaip vienas elementas
// //kaip pvz viena vardo raide
// // console.log(fruits.length);
// // console.log(fruits[1]);
// for(let i = 0; i < fruits.length; i++){
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     if(student.length > 5){
//         console.log(`Vardas ${student} turi daugiau nei 5 raides`);
//     } else if (student.length < 5){
//         console.log(`Vardas ${student} turi maziau nei 5 raides`);
//     } else {
//         console.log (`Vardas ${student} turi lygiai 5 raides`);
//     }
// }

// const cart = [7, 10, 0.5, 23, 41];

// let total = 0;

// for (let i = 0; i < cart.length; i++){
//     const number = cart[i];
//     total += number;
// }
// console.log (total);

// FUNKCIJOS
//yra 2 rusiu funkcijos
//1. void rusis/funkcija, neturi return reiksmes, ji tik printina
//2. return rusis/funkcija
// function square(number) {
//     return number * number;
// }
// const squaredNumber = square(5);
// console.log(squaredNumber);
// //cia return funkcija

// function logger(value) {
//     console.log(value);
// }
// const loggedValue = logger("Testing...");
// console.log(loggedValue);
// //cia void

// function printAllArrayItems(array) {
//     for(let i = 0; i < array.lenght; i++) {
//         const item = array[i];
//         console.log(item);
//     }
// }

// const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];

// printAllArrayItems(students);
// //nieko neprintina nes void

// function repeatString(string, count) {
//     let finalString = "";

//     for(let i = 0; i < count; i++) {
//         finalString += string;
//     }
//     return finalString;
// }
// const repeatedString = repeatString("rokas", 2);
// console.log(repeatedString);

// function addition(a,b){
//     return a+b;
// }
// console.log(addition (5, 4));

// function substraction(a, b) {
//     return a-b;
// }
// console.log(substraction(10, 5));
