const fruits = ["apple", "orange", "pear"];

// .pop() - pasalina paskutini masyvo elementa ir ji grazina
// const lastElement = fruits.pop();
// fruits.pop() veikia taip pat

// .shift() - pasalina pirmaji masyvo elemena ir ji grazina
// const firstElement = fruits.shift();

//.push() - prideda nauja elementa i masyvo gala

// fruits.push("pineapple");

//.unshift() - prideda nauja elementa i prieki

//fruits.unshift("banana");

// const upperCasedFruits = [];

// for(let i = 0; i < fruits.length; i++){
//     const fruit = fruits(i);
//     //console.log(`${i}.${fruit}`);
//     const upperCased = fruit.toUpperCase();
//     upperCasedFruits.push(upperCased);
// }

// ["APPLE", "ORANGE", "PEAR"]

// Callback funkcija - iskvietimo funkcija, but iskviestam kitoje f-joje

// function log(name){
//     console.log(name);
// }

// function showAlert(callback) {
//     // alert("Neringa");
//     callback("Neringa");
// }

// log("Neringa");
// showAlert(log);

const names = ["bob", "helen", "jack"];

// .forEach () - daro ciklu, veikia kaip for ciklas

// names.forEach(showName);

// function showName(name) {
//     console.log(name);
// }

// names.forEach((name, index) => {
//     console.log(index + name);
// });
//showName gaunasi kaip callback f-ja

//.map() - ciklas kuris praeina per visus masyvo elementus ir grazina
//nauja masyva

// const modifiedNames = names.map((name) => {
    
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); 
// });
// console.log(names);
// console.log(modifiedNames);

const years = [12, 15, 24, 27, 29, 30, 35, 40];

//.filter() - ciklas kuris praeina per visus masyvo elementus
//ir grazina nauja masyva jeigu reiksme yra true(pozityvi)

const moreThanTwenty = years.filter((age) => {
    return age > 20;
})

const lessThanTwenty = years.filter((age) => age < 20);

//.find() - 

const cars = ["BMW","Audi","VW", "Kia", "Mini"];
//suranda pirma elementa is masyvo kuris atitinka kriteriju(true)
// const foundCars = cars.find(car => charAt(0) === "K");
// console.log(foundCars);

// .some() - patikrina ar nors vienas elementas atitinka kriteriju
// ir grazina true arba false

// const hasShortName = cars.sum(car => car.length < 3);
// bus true nes "VW" yra trumpesnis nei 3

// .every () - patikrina ar kiekvienas elementas atitinka kriteriju
//ir grazina true arba false

const isEveryUpperCased = cars.every(car => car.charAt(0) === car.charAt(0).toUpperCase());
//bus true nes visi didziosiom raidem 


