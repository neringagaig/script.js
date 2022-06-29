const renderCard = (product) => {
  const { id, image, price, title } = product; //kaip is produkto istraukti jo propercius
  const card = document.createElement("div");
  const imageEl = document.createElement("img");
  const titleEl = document.createElement("p");
  const priceEl = document.createElement("h2");
  const deleteButton = document.createElement("button");

  card.className = "card";
  priceEl.style.color = "red";
  imageEl.src = image;
  imageEl.alt = title;
  titleEl.textContent = title;
  priceEl.textContent = price;
  deleteButton.textContent = "Ištrinti";

  deleteButton.addEventListener("click", () => {
    const params = {
      method: "DELETE",
    };
    fetch(`https://golden-whispering-show.glitch.me/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        location.reload;
      })
      .catch((error) => {
        console.error(error);
      });
  });

  card.append(imageEl, titleEl, priceEl, deleteButton);
  document.body.append(card);
};
fetch("https://golden-whispering-show.glitch.me")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);

    response.forEach((product) => renderCard(product));

    // renderCard(response[0]);
  })
  .catch((error) => {
    console.error(error);
  });

// const handleAddProduct = () => {
//   const newProductForm = document.createElement("form");
//   const productImage = document.createElement("input");
//   productImage.type = "image";
//   productImage.name = "image";
//   productImage.placeholder = "Image";
//   const productTitle = document.createElement("input");
//   productTitle.type = "text";
//   productTitle.name = "title";
//   productTitle.placeholder = "Title";
//   const productPrice = document.createElement("input");
//   productPrice.type = "text";
//   productPrice.name = "price";
//   productPrice.placeholder = "Price";
//   //   const addButton = document.createElement("button");
//   //   addButton.textContent = "Add product";
//   newProductForm.append(productImage, productTitle, productPrice);
//   document.body.append(newProductForm);

//   const ProductForm = {
//     image: productImage.value,
//     title: productTitle.value,
//     price: productPrice.value,
//   };

//   const params = {
//     method: "POST",
//     body: JSON.stringify(productForm),
//     //pakeiciam atgal formata, kad backendas suprastu kas yr kas
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   }; //tai yra parametras skirtas duomenu ikelimui i serveri, kuris rasosi prie fetcho

//   fetch("https://golden-whispering-show.glitch.me", params)
//     .then((resp) => resp.json())
//     .then((response) => {
//       renderCard(response);
//       productImage.value = "";
//       productTitle.value = "";
//       productPrice.value = "";
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const addButton = document.createElement("button");
// addButton.textContent = "Add product";

// addButton.addEventListener("submit", handleAddProduct);
