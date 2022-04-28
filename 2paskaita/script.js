//!!!tikrinti rasybos klaidas
//1.kurioje papkėje randamės ar repositorijoj komanda "ls"
//2.patikrinti ar padaryta ctrl+s
//3. patikrinti ar parasyta console.log()
//4. patikrinti ar tinkamai paleidau faila node script ar kitas failo pavadinimas
//5. patikrinti metama zinute
// cd .. - grįžti atgal
// cd 1paskaita - nueis į ta aplanka
// ls -rodo visus aplanko failus

// console.log("sveiki čia antra paskaita");

// let money = 100.5;
// let price = 105.5;
// const currency = "$";

// if (money>price){
//     const change = money - price;
//     console.log("You paid extra, here's your change:" + currency + change)//a
// }else if (money===price) {
//     console.log("You paid the exact amount, have a nice day!")//b
// }else {
//     const missingMoney = price - money;
//     console.log("That's not enough, you still owe me:" + currency + missingMoney )//c
// }

// let runner = "Kendall";
// let position = 2;
// let medal = "pat on the back";

// if (position === 1) {
//     medal = "gold";
// }else if (position === 2) {
//     medal = "silver";
// }else if (position === 3) {
//     medal = "bronze";
// }
// console.log (runner + " " + "received a"+ " " + medal + " " + "medal.");

// const number = 1;

// if(number % 2 == 0){
//     //even lyginis
//     console.log ("Skaičius yra lyginis.")
// }
// else {
//     //odd nelyginis
//     console.log ("Skaičius yra nelyginis.")
// }

const people = 4;
let peopleCount = "didelė grupė";

if (people === 0) {
     peopleCount = "Ne grupė";
}else if (people === 1) {
    peopleCount = "solo";
}else if (people === 2) {
    peopleCount = "duetas";
}else if (people === 3) {
    peopleCount = "trio";
}else if (people === 4) {
    peopleCount = "kvartetas";
}
console.log (peopleCount);