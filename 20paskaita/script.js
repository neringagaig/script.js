// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     compareAge(other) {

//     }
// }

// class Cat {
//     constructor(name, weight) {
//         this.name = name;
//         this.weight = weight;
//     }
//     isFat() {
//         if(this.weight >= 5) {
//             return `${this.name} yra storas kačiukas`;
//         }else {
//             return `${this.name} yra plonas kačiukas`;
//         }
//     }
// }

// const cat = new Cat("Toris", 6.2);

// console.log(cat.isFat());

// fn([1, 5, "a", "c", "z"; 7]) => [1, 5, 6];
// arr.filter (x => isNaN(x))

const randomArr = [1, 5, "a", "c", "z", 7];

const removeNumbersFromArray = (array) => array.filter(x => isNaN(x));

const removeCharsFromArray = (array) => array.filter(x => !isNaN(x));
// //pridetas sauktukas pakeite reiksme isNaN

// const removedChars = removeCharsFromArray(randomArr);


// const removedNumbs = removeNumbersFromArray(randomArr);
// console.log(removedNumbs);

// console.log(removedChars);


//isNaN - is not a number f-ja kuri ziuri ar skaicius ar ne
// isNaN(1) => false
// isNaN("a") => true

//!true => false
//!!true => false => true
//sauktukas padaro reiksme i boolean

// let s = "Neringa 122 Gaigalaitė";
// // split("") ["a", "b", "c", "d"]
// //map(char) => "a" + "a"
// //join("") => ["a" + "a"] => "aa"
// const test = s.split("").map((char) => (isNaN(char) ? char+char : char)).join("");

// console.log(test);

// const testString = "Rokas !@#$%^ Tomas 123"
// // ats: "Rokas !!@@##$$%%^^ Tomas 112233"
// const newTest = testString
// .split("")
// .map((char) => (isLetter(char) || char === " " ? char : char + char))
// .join("");

//jei yra tarpu post code neteisingas.
// pvz: fn("abs122") => false; fn("12345") => true; fn ("123ab") => true.

const checkPostCode = (postCode) => {
const removedChars = removeCharsFromArray(postCode.split(""));
const removedNumbs = removeNumbersFromArray(postCode.split(""));
if(postCode.includes(" ")){
    return false;
}else if(removedChars.length === 5) {
    return true;
} else if (removedChars.length === 2 && removedNumbs.length === 3) {
    return true;
}else {
    return false;
};
};

const code = "12345"; //false
console.log(checkPostCode(code));