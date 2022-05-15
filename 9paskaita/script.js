//anonimine funkcija yra funkcija be pavadinimo
// function (){
    //}

const painter = document.querySelector("input[name='painter']");

painter.addEventListener("input", (event) => {
    const value = event.target.value;
    const result = document.getElementById("painterResult");

    let paintedI = "";

    for (let i = 0; i < value; i++){
        paintedI += "<div>I</div>";
    }

    result.innerHTML = paintedI;
    //<div>I</div> daryti pasikartojanti, t.y. pattern
    result.textContent = value;
} )

const price = document.querySelector("input[name='price']");
price.addEventListener("blur", handleBlur);
let total = 0;

function handleBlur(event) {
    const value = event.target.value;
    total += Number(value);
    totalResult.textContent = `Total: ${total}`;
    price.value = 0;
}

const fruitButton = document.querySelector("#add");

fruitButton.addEventListener("click", handleAddFruit);

function handleAddFruit(event) {
event.preventDefault();

const list = document.querySelector("#fruit-list");
const fruit = document.querySelector("input[name='fruit']");

// <li> </li>
const newFruit = document.createElement("li");
// <li>{fruit.value}</li>
newFruit.textContent = fruit.value;
// <ul>
// <li>{fruit.value}</li>
// </ul>
list.append(newFruit);
fruit.value = "";
}



