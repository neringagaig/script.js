

//one line komentaras

/*multi
 line
 komentaras */

//priskiriam kintamiejiem reikšmes su let
let myName;
let age;
let mySurname;
let fullName
let result;
let average;
let percent;

// console.log(myName); //undefined-vienas iš tipų naudojamas kai kintamasis yra sukurtas bet neturi reiksmes
// sukuriam kintamuosius
myName = "Neringa"; //String - reikšmė, apsirašanti tarp kabučių
age = 24; //number rašosi be kabučių
mySurname = "Gaigalaitė";
fullName = myName +" " + mySurname; //sudėtis - tarp dviejų tipų, geriausia du viendus sudėt
result= age + age - 9 ; // 24+24-9=39
result=result+result; //39+39=78
average = (8+8+9+10+10)/5;
percent = (100*20)/60;
percentOutput = percent + "%"; // 33.33% nunber+string=string
// console.log(age); // taip pat galiu rasyt ir string/number
console.log(myName);
// console.log(fullName);
// console.log(result)
// console.log(average);
// console.log(percentOutput);
// console.log(9+9); //18
// console.log("9"+"9"); //99
// console.log (40+"760") // 40760

//sukuriam kintamuosius su const

// const myCatName = "Moka"; //tai yra nekintama reiksme, vieto Moka jau parasyt Toris negalima

// //kada naudoti let ir kada const?
// //naudoti let tik tada, kai reiksme yra kintanti
// //kitais atvejais naudoti const
// //sukurus kintamaji visada sukuriam pradine reiskme

// //kintamuju tipai: string number boolean

// //boolean - buna true arba false

// const yes = true; //teigiama reiksme
// const no = false; //neigiama reiksme

// // console.log(yes);
// // console.log(no);
// console.log(10==15); //10 nera lygu 15 todel meta false
// console.log("rokas" == "rokas");//jei vienas bus is didziosios raides pvz rodys false

// console.log(10!=10); //10 yra nelygu 10, rodys false, jei butu 10 ir 11 rodytu true
// console.log(5!=4);
// //dviguba lygybe tikrina ar reiksme yra lygi, todel "5" ir 5 bus lygu(true)
// console.log("5" == 5);
// //triguba lygybe tikrina ar reiksme yra lygi ir ar tipas toks pat.
// console.log("5"===5);

//visos neigiamos reiksmes yra = undefined, null,0,"", false
console.log("4"!=4);
console.log("4"!==4);

//visada naudojam triguba lygybe(tikrina reiksme ir tipa), nelygybej sauktukas yra kaip lygybė
//0=false 1=true



