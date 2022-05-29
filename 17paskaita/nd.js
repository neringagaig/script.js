// const fn = (nums) => nums.filter(x => x < 0).sort((a, b) => b - a)[0];

// const randomNumbers = (quant) => {
//     const generatedNums = [];
//     for(let i = 0; i < quant; i++){
//       generatedNums.push(Math.floor(Math.random() * 10) + 1)
//     }
//     return generatedNums;
// }

// console.log(generatedNums);

// const sumOverHundred = (n1, n2) => n1 + n2 > 100;

// const fn = (array) => array.sort((a, b) => a.name > b.name ? 1 : -1).sort((a, b) => a.age - b.age);

// function isItHoliday(date) {
//     const holidays = ["2020-01-01", "2020-05-25"];
//     return holidays.some(holiday => (new Date(holiday)).getDate() === date.getDate())
// }
  
// console.log(isItHoliday(new Date("2022-05-27")))

// const missingNumber = (array) => array.find((x, i) => x + 1 !== array[i+1]) + 1;