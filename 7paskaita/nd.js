// const firstTask = document.getElementById("first-task");

// firstTask.addEventListener ("submit", handleSubmitFirstTask)

// function handleSubmitFirstTask(event) {
//     event.preventDefault();

//     const nameInput = document.querySelector("input[name=name]");
//     const ageInput = document.querySelector("input[name=age]");
//     const result = document.querySelector("#result");

//     result.textContent = `Tavo amžius: ${ageInput.value}`;
//     function alertName(name){
//         alert(name);
//     }
//     alertName(nameInput.value);
    
//     const legalAge = 18;
//     if (ageInput.value > legalAge) {
//         result.textContent = `Vairuoti gali ${nameInput.value}`;
//     } else {
//         result.textContent = `Dar mokysis vairuoti ${nameInput.value}`;
//     }
    
//     nameInput.value = "";
//     ageInput.value = "";
// }

// const ageInput = document.getElementById("age");
// const form = document.querySelector("form");
// const priceDisplay = document.getElementById("price");

// function handleFormSubmit(event) {
//   event.preventDefault()
//   const price = 6;
//   const age = Number(ageInput.value);

//   if (age >= 60) {
//     priceDisplay.textContent = (0.5 * price).toFixed(2);
//   } else if (age < 18) {
//     priceDisplay.textContent = (0.45 * price).toFixed(2);
//   } else {
//     priceDisplay.textContent = price.toFixed(2);
//   }
// }

// form.addEventListener("submit", handleFormSubmit);

const ageInput = document.getElementById("age");
const tInput = document.querySelector("input[type=checkbox]");
const form = document.querySelector("form");
const result = document.getElementById("result");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const age = Number(ageInput.value);
  const isConvicted = tInput.checked;

  if (age >= 18 && age <= 30 && !isConvicted) {
    result.textContent = "Army's calling you";
  } else {
    result.textContent = "No army for you";
  }
}