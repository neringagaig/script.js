const renderCars = (cars) => {
  const { brand, model } = cars;
  const carBrand =
    document.createElement("td");
  const carModel =
    document.createElement("td");

  carBrand.textContent = brand;
  carModel.textContent = model;
  const carRow =
    document.createElement("tr");
  carRow.append(carBrand, carModel);
  const tbody = document
    .getElementById("car-tb")
    .append(carRow);

  return tbody;
};

fetch("https://olive-bead-glazer.glitch.me/")
  .then((resp) => resp.json())
  .then((response) => {
    renderCars(response);
  })
  .catch((error) => {
    console.error(error, ":failed to load");
  });

// const handleAddCar = (event) => {
//     event.preventDefault();
//     const brandText = document.querySelector('input[name="brand"]');
//     const modelText = document.querySelector('input[name="model"]');

//     const newCar = {brand: brandText.value, model: modelText.value};

//     const params = {
//         method: "POST",
//         body: JSON.stringify(newCar),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     };

//     fetch("https://olive-bead-glazer.glitch.me/", params)
//     .then(resp => resp.json())
//     .then(response => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// };

// const addForm = documment.getElementById("car-form");
// addForm.addEventListener("submit", handleAddCar);
