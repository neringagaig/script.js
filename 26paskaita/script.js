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

  card.append(imageEl, titleEl, priceEl, deleteButton);
  document.body.append(card);

  deleteButton.addEventListener("click", () => {
    const params = {
      method: "DELETE",
    };
    fetch(`https://golden-whispering-show.glitch.me/${id}`, params)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        location.reload;
      })
      .catch((error) => {
        console.error(error);
      });
  });
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
