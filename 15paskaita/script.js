// Splice - padeda istrinti arba iterpti elementa i prsirinkta vieta masyve

// .splice()

const sentence = ["I", "study","Javascript","right","now"];

// sentence.splice(0,2); //ištrina pirmus du ir grazina

// sentence.splice(2,2);// istrinta nuo trecio elemento du
// pirmas argumentas bus vieta, antras argumentas kiek istrinti

// sentence.splice(2, 1, "TypeScript"); // istrina javascript ir pakeicia i typescript
// sentence.splice(1, 4, "studied", "typescript", "before"); 
// console.log(sentence);

// const sliced = sentence.slice(0, 3);
// const sliced = sentence.slice(-3); //paskutinius tris
// console.log(sliced);

// const numbers = [7, 8 , 1, 0.5, 8, 6, 10, 20, 30, 40];

// const total = numbers.reduce((previousValue, currentValue)=> {
//     console.log(currentValue);
//     return previousValue + currentValue;
// },0);
// console.log("");
// console.log(total);

// const sorted = numbers.sort((a, b) => a - b); //surikiuoja didejimo tvarka
// const sortedDescendingOrder = numbers.sort((a, b) => b - a) // surikiuota mazejimo tvarka
// console.log(sorted);
// console.log(sortedDescendingOrder);

// const genres = ["Jazz", "Blues"];

// genres.push("Rock-n-Roll");

// genres.splice(1, 1, "Classics");

// const deletedFirstElement = genres.shift();

// genres.unshift("Rap", "Reggae");

// console.log(deletedFirstElement);
// console.log(genres);

let arr = [11, -2, 34, 45, 19, 6];

// const getMAxSubSum = arr.filter((num) => {
//   return num > 0;

// });

// function getMaxSubSum(array) {
// const sum = array.reduce((total, num) => (num > 0 ? total + num : total), 0);
// return sum;
// }

// function getMaxSubSum(array) {
//     const sum = array.reduce((total, num) => {
//     if (num > 0) {
//     return total + num;
//     } else {
//     return total;
//     }
//     }, 0);
//     return sum;
//     }
    
//     const sum = getMaxSubSum(arr);
//     console.log(sum);
