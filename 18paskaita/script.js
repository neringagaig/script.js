// const removeFirst = (value) => {
//     const withoutFirst = value.slice(1);
//     return withoutFirst[0].toUpperCase() + withoutFirst.slice(1).toLowerCase();
// };

// removeFirst ("Neringa");

// const startsA = (array) => array.filter( p.first_name[0] === "A").length;

// const hasK = (array) => array.filter((p) => p.first_name.includes("K")).length;
// console.log(hasK(data));

//OBJEKTINIS PROGRAMAVIMAS

//konstruktoriaus funkcija rasoma is didziosios raides
// function Book (name, author, year) {
//     this.name = name;
//     this.author = author;
//     this.year = year;
//     this.getInfo = () => {
//         return `${this.name} parašė ${this.author}`;
//     };
//     this.getYears = () => {
//         const today = new Date();
//         return today.getFullYear() - this.year;
//     };
// };
// const harryPoterBook = new Book("Harry Potter", "J.K. Rowling", 1997);
// // console.log(harryPoterBook);
// console.log(harryPoterBook.getYears());

//KONSTRUKTORIUS SU KLASĖMIS:

// class Book {
//     constructor(name, author, year) {
//         name = name;
//         author = author;
//         year = year;
//     }
//     getInfo = () => {
//         return `${this.name} parašė ${this.author}`;
//     };
//     getYears = () => {
//         const today = new Date();
//         return today.getFullYear() - this.year;
//     };
// };

// class Employee {
//     constructor(position, wage, experience){
//         this.position = position;
//         this.wage = wage;
//         this.experience = experience;
//     }
//     getBonus = () => {
//         if(this.experience < 5) {
//             return this.wage;
//         } else if (this.experience < 10){
//             return this.wage * 2;
//         } else {
//             return this.wage * 3;
//         };
//     };
// }

// const softwareDeveloper = new Employee("Front-end engineer", 4000, 2);
// const salesManager = new Employee("Sales Manager", 6000, 7);
// console.log(salesManager.getBonus());
