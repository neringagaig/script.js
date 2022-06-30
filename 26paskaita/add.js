const submitButton = document.querySelector("#add-product");

submitButton.addEventListener("click", handleAddProduct);

function handleAddProduct(event) {
  event.preventDefault();
  const productImage = document.querySelector("input[name='image");
  const productTitle = document.querySelector("input[name='title']");
  const productPrice = document.querySelector("input[name='price']");
  const productForm = {
    image: productImage.value,
    title: productTitle.value,
    price: productPrice.value,
  };
  const params = {
    method: "POST",
    body: JSON.stringify(productForm),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch("https://golden-whispering-show.glitch.me", params)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
      productImage.value = "";
      productTitle.value = "";
      productPrice.value = "";
    })
    .catch((error) => {
      console.error(error);
    });
}
