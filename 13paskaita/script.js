// Žinoti primityvius duomenų tipus ir jų apibrėžimą.
// Boolean object
// Number object
// String object

/* 
Primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
*/

const name = "Neringa";
const age = 7.525;
const isHot = true;
const notFound = undefined;
const noValue = null;

// const isHotString = Boolean(isHot).toString();

// const count = "15";

// const countNumber = Number(count);

// console.log(count + count);
// console.log(countNumber + countNumber);

// //integer - sveikasis skaicus
// console.log(Number.isInteger(5));

//paverčiam i string

// console.log(Number(5.752).toString());

//apvalina skaicius po kablelio
// 

const sentence = "My name is Neringa and i am very tired";

//suranda stringe kito stringo dalį ir jei yra rodo true
// is didziosios jeigu parasyt Tired rasys false. t.y. case sensitive
// console.log = sentence.includes("tired");

//nukerpa nuo vienos vietos iki kitos. vieta skaiciuojasi simboliais
// console.log(sentence.slice(0 ,8)); //pradzia ir pabaiga
// console.log(sentence.slice(21));//nuo pat pradzios iki pabaiogs
// console.log(sentence.slice(0, -5));//nuo pradzios iki nukirpto galo
// console.log(sentence.slice(-5));//nuo galo

// console.log(sentence.trim());
//nuima nereikalingus tarpus

// const upperCased = sentence.toUpperCase();//visos raides didziosios
// //console.log(upperCased);

// const lowerCasec = sentence.toLowerCase();//visos raides mazosios
// //console.log(lowerCased);

//patikrina ar stringai yra vienodi
// function areSameStrings(firstString, secondString){
//     return firstString.toUpperCase() === secondString.toUpperCase();
//     //mes true nes visos raides bus padarytos didziosiom
// }
// console.log (areSameStrings("Rokas", "rokas"));


// //repeat funkcija
// const resultCount = 5;
// const dog = "rikis";

// cons result = dog.repeat(resultCount);
// console.log(result);

// const splitted = sentence.split(" ");
// console.log(splitted);
// //suskirsto i masyvus, pamates koki simboli, pvz tarpa

// const tagInput = " prekyba marketingas vilnius kaunas programavimas"

// const tags = tagInput.split(" ");


