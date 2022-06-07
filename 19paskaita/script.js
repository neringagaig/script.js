//OBJEKTINIS PROGRAMAVIMAS
// OOP (Object-Orientated Programming) susideda iš keturių fundamentalių principų:

// Inkapsuliacija (objekto vidiniai duomenys yra slepiami ir jais galima manipuliuoti tik naudojant objekto viešus metodus);
// Abstrakcija (objekto nepriklausomumas nuo išorinių sudedamųjų dalių);
// Paveldėjimas (klasė yra kitos klasės konkretizacija);
// Polimorfizmas (galimybė dirbti su objektu nežinant jo tikslaus tipo bei struktūros).

// class Animal {
//     constructor(name, color) {
//       this.name = name;
//       this.color = color;
//     }
//   }
//   class Rabbit extends Animal {
//     constructor(name, color) {
//         super(name, color);
//         this.created = Date.now();
//     }
//   }
//   let rabbit = new Rabbit("White Rabbit", "white"); 
//   // Error: this is not defined
//   console.log(rabbit);
//   // .super naudojamas kai norima praplesti klase su kita klase pvz 
//   // klase gyvunas, smulkesnesne klase triusis

// class Item {
//     constructor (name, price, count) {
//         this.name = name;
//         this.price = price;
//         this.count = count;
//     };
//     addToList = () => {
//         const list = document.getElementById("list");
//         const newItem = document.createElement("li");
//         newItem.textContent = `${this.name} x ${this.count} = $ ${this.price * this.count}`
//         list.append(newItem);
//     };
// };


// const submitItemForm = (event) => {
//     event.preventDefault();
//     const itemName = document.querySelector("input[name='item']");
//     const price = document.querySelector("input[name='price']");
//     const count = document.querySelector("input[name='count']");

//     const item = new Item(itemName.value, Number(price.value), Number(count.value));

//     item.addToList();
// }

// const itemForm = document.getElementById("item-form");

// itemForm.addEventListener("submit", submitItemForm);

// //jei naudojama arrow f-ja reikia pries rasant addeventlistener rasyt

// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.addToTable = function () {
//       const nameColumn = document.createElement('td');
//       nameColumn.textContent = this.name;
//       const surnameColumn = document.createElement('td');
//       surnameColumn.textContent = this.surname;
//       const tr = document.createElement('tr');
//       tr.append(nameColumn, surnameColumn);
//       document.querySelector('table > tbody').append(tr);
//     };
//   }
  
//   const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  
//   document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault();
//     const fullname = document.getElementById('fullname').value;
//     const [name, surname] = fullname.split(' ').map(namePart => capitalize(namePart.trim()));
  
//     const person = new Person(name, surname);
//     person.addToTable();
//   });

// class Car {
//     constructor(brand, model, mileage, price, image) {
//       this.brand = brand;
//       this.model = model;
//       this.mileage = mileage;
//       this.price = price;
//       this.image = image;
//     }
  
//     addToList() {
//       const card = document.createElement('div');
//       card.className = "card";
//       card.addEventListener('click', () => alert(`Price: ${this.price}`));
      
//       const img = document.createElement('img');
//       img.src = this.image;
      
//       const text = document.createElement('h6');
//       text.innerText = `${this.brand} ${this.model}`;
  
//       card.append(img, text);
//       document.querySelector('div.wrapper').append(card)
//     }
//   }
  
//   document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault();
//     const brand = document.getElementById('brand').value;
//     const model = document.getElementById('model').value;
//     const mileage = document.getElementById('mileage').value;
//     const price = document.getElementById('price').value;
//     const image = document.getElementById('image').value;
  
//     const car = new Car(brand, model, mileage, price, image);
//     car.addToList();
//   });

// Tai tikriausiai paprasčiausias būdas išfiltruoti dublikatus,
// bet internete galite rasti ir daugiau įvairių variantų
const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([1, 3, 3, 5, 5, 5]));
