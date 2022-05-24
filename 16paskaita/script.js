const person = {
    name: "Neringa",
    surname: "Gaigalaitė",
    age: 24,
};

// const ageProperty = "age";

// console.log(person.age);
// console.log(person.name);
// console.log(person["age"]);

// person[ageProperty];
// person["age"];

const people = [
    {
        id: 1,
        name: "Neringa",
        surname: "Gaigalaitė",
        age: 24,
    },
    {
        id: 2,
        name: "Jonas",
        surname: "Petraitis",
        age: 29,
    },
    {
        id: 3,
        name: "Petras",
        surname: "Jonaitis",
        age: 33,
    },
    {
        id: 4,
        name: "Lina",
        surname: "Linaitytė",
        age: 16,
    },
];

// console.log(people[0]);

// const firstItem = people[0];//pirmas elementas is masyvo
// const lastItem = people[people.length -1]; //paskutinis masyvo elementas
// console.log(lastItem);
// people.push({id: 5, name: "Rūta", surname: "Rūtaitytė", age: 18});
// people.shift();
// // console.log(people);

// people.forEach( (person) => {
//     // console.log(person.surname);
//     const fullName = `${person.name} ${person.surname}`;
//     console.log(fullName);
// } );

// const peopleWithFullName = people.map( (person) => {
//     const personName = `${person.name} ${person.surname}`;
    
//     return {
//         ...person,
//          name: person.name.toUpperCase(),
//          fullName: personName, 
//          canDrive: person.age >= 18 
//         };//trys taskai reiskia kad kiekviena reiksme
//     //yra perkopijuojama ir idedama nauja reiksme
// } );

// console.log(peopleWithFullName);
//norint suzinot paskutini galima rasyt people.lenght -1

const veggies = [
    {name: "Apple", category: "tree", price: 1},
    {name: "Pear", category: "tree", price: 2},
    {name: "Blackberries", category: "bush", price: 4.5},
    {name: "Blueberries", category: "bush", price: 7},
    {name: "Carrot", category: "dirt", price: 0.5},
    {name: "Potato", category: "dirt", price: 0.3}
]
// const cheapVeggies = veggies.filter(veggie => veggie.price <= 1);
// const expensiveVeggies = veggies.filter(veggie => veggie.price >= 6);

// const expensiveVeggiesNames = expensiveVeggies.map((veggie) => veggie.name);
// const expensiveVeggiesNames = veggies.filter(veggie => veggie.price >= 6).map((v) => v.name);
// console.log(cheapVeggies);
// console.log(expensiveVeggiesNames);

// veggies.sort((a,b) => a.name > b.name ? 1 : -1);
// // nuo a iki z surikiuoja
// console.log(veggies);

function prices(array){
    const sorted = array.sort((a,b) => a.price-b.price);
    const cheapest = sorted[0];
    const expensive = sorted[sorted.length -1];
    return{ cheapest: cheapest.name, expensive: expensive.name};
};

const veggiesPrice = prices(veggies);

console.log(veggiesPrice);
