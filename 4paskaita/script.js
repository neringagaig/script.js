//FOR LOOPS - FOR CIKLAI

//"for" - reiškia, kad bus ciklas, kuris kartosis nurodytą kiekį kartų
// "i" "j" "k" - kintamasis, inicializavimas
// rasysis "for" o ne "const" nes tai yra kintama reiksme
// [inicializavimas]; [sąlyga];[finaline išraiška]
// i++ : i= i+1 prideda viena
// i-- : i= i-1 atima viena
// operators :
// += : x += y : x = x+y
// -= : x-= y : x = x-y


// for (let i = 0; i < 10; i++) {
//     console.log( `$ {i}. "Neringa"`);
//   }

// const name = "Neringa";
// const count = 10;
// for (let i = 0; i < count; i++) {
//   console.log(name);
// }

// const name = "Neringa";
// const count = 10;
// for (let i = 0; i < count; i++) {
//   console.log(`${i}. ${name}`);
// }

// let i = 10;
// while(i > 0) {
//   console.log(i);
//   i--;
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }
// for (let i = 0; i < 10; i += 2) {
//     console.log(i);
// }

// const dogName = "togis";
// const repeat = 3;
// let result =  "";

// for (let i = 0; i < repeat; i++) {
//     if (i === repeat - 1) {
//     // paskutinis ciklas
//     result += `${dogName}.`;
//     } else {
//     result += `${dogName}, `;
//     }
//     }
// // a = a + b
// // "" = "" + "Rikis"
// // "Rikis" = "Rikis" + "Rikis"
// // "RikisRikis" = "RikisRikis" + "Rikis"
// // "RikisRikisRikis" = "RikisRikisRikis" + "Rikis"
// // "RikisRikisRikisRikis" = "RikisRikisRikisRikis" + "Rikis"
// console.log (result);

// const start = 1;
// const count = 9;
// let result = 0;

// for (let i = start; i < count + 1; i++) {
//     result += i;
// }
// console.log(result);


//jeigu netycia pasidaro infinitive loop, t.y. begalybe, stabdyti ja ctrl+c

//WHILE

// //inicializavimas
// let i = 0;
// //sąlyga
// while (i < 3) {
// //shows 0. then 1, then 2
// console.log(i);
// //išraiška
// i+= 2;
// }

//do...while ciklas pirmiausia įvykdys kūną, tada patikrins būklę ir, kol tai tiesa, vėl ir vėl ją vykdys.
// let i=0;
// do {
//     console.log(i);
//     i++;
// }while (i < 3);

// for (let i = 0; i < 12; i+=2) { 
//    if(i % 2 === 0){
//        console.log (i);
//    } 
// }

// for (let i = 9; i >= 1; i--) {
//     console.log (`${"hello"}${i}`)
// }

// let x=9
// while (x>=1) {
//     console.log ("hello" + x);
//     x= x-1;
// }

const getLaugh = 4;
const laugh = "ha";
let result = "";
for (i = 0; i < getLaugh; i++) {
    if (i === getLaugh - 1) 
    {
     // paskutinis ciklas
        result += `${laugh}!`;
        } else {
        result += `${laugh}`;
        }
    console.log (result);
}


